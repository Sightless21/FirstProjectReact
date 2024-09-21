import { View } from 'react-native'
import React from 'react'
import Toast from 'react-native-toast-message'
import { Text, Card, Input, Button } from '@rneui/base'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm, Controller } from "react-hook-form"
import { login } from '../services/auth-service'
import { AxiosError } from '../services/http-service'


const LoginScreen = (): React.JSX.Element => {

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please input email")
      .email("Email format is valid"),
    password: yup
      .string()
      .required("Please input password")
      .min(3, "Please Enter password must be 3 charecters")
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid }
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });


  const onLogin = async (data: any) => {
    try {
      const response = await login(data.email, data.password);
      if (response.data.status === 200) {
        Toast.show({type:'success',text1:'Login Success'});
        //console.log('login sucess')
      }
    } catch (errors: any) {
      let err: AxiosError<any> = errors; //change error for axosError
      if (err.response?.status === 401) {
        console.log(err.response.data.message);
      } else {
        Toast.show({type:'error',text1:'Login Error'});
        console.log("เกิดข้อผิดพลาด ไม่สามารถิดต่อ server ได้");
      }
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text style={{ fontFamily: 'monospace', fontSize: 30 }}>Thai-Nichi</Text>
      <Card containerStyle={{ padding: 10, width: '90%' }}>
        <Controller name="email" control={control} render={({ field: { onBlur, onChange, value } }) => (
          <Input
            placeholder='Email'
            leftIcon={{ name: 'email' }}
            keyboardType='email-address'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            errorMessage={errors.email?.message} />
        )} />
        <Controller name="password" control={control} render={({ field: { onBlur, onChange, value } }) => (
          <Input
            placeholder='Password'
            leftIcon={{ name: 'key' }}
            keyboardType='number-pad'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
            errorMessage={errors.password?.message} />
        )} />
        <Button
          title={'Login'}
          onPress={handleSubmit(onLogin)}
          loading={isSubmitting}>
        </Button>
      </Card>
    </View>
  )
}

export default LoginScreen