import { View } from 'react-native'
import React, { useState } from 'react'
import { Text, Card, Input, Button, Icon } from '@rneui/base'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from 'react-hook-form';
import { login } from '../services/auth-service';
import { AxiosError } from '../services/http=service';
import Toast from 'react-native-toast-message';
import { setIsLogin } from '../auth/auth-slice';
import { useAppDispatch } from '../redux-toolkit/hooks';

const LoginScreen = (): React.JSX.Element => {

    const[showPassword, setShowPassword] = useState(false);
    const dispatch = useAppDispatch();

    // 1. Define A validation with Yup schema
    const schema = yup.object().shape({
        email: yup.string().required("Please input your email").email("Email format is invalid"),
        password: yup.number().required('Please input your password').min(3, "Password must be at least 3 characters")
    });

    // 2. Apply with React Hook form
    const {
        control, // controlling the input
        handleSubmit, // handle the form submit and check the validation
        formState: { errors, isSubmitting, isValid } // basically checking all the attributes designated (err, submit)
    } = useForm({
        resolver: yupResolver(schema),
        mode: "all",
    });

    const onLogin = async (data: any) => {
        try {
            const response = await login(data.email, data.password);
            if(response.status === 200) {
                dispatch(setIsLogin(true))
                //console.log('Login success');
                Toast.show({type: 'success', text1: 'Login Success'})
            }
        } catch (error:any) {
            let err: AxiosError<any> = error;
            if(err.response?.status === 401) {
                //console.log(err.response.data.message);
                Toast.show({type: 'error', text1: 'Login Success'})
            } else {
                console.log('An error has occured. Cannot connect to the server');
            }
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text h2>Thai-Nichi</Text>
            <Card containerStyle={{ padding: 10, width: '90%' }}>
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <Input
                            placeholder='Email'
                            leftIcon={{ name: 'email' }}
                            keyboardType='email-address'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            errorMessage={errors.email?.message}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <Input
                            placeholder='Password'
                            leftIcon={{ name: 'key' }}
                            rightIcon={
                                <Icon
                                name = {showPassword?"eye":"eye-off"}
                                type = "feather"
                                onPress={() => setShowPassword(!showPassword)}
                                />
                            }
                            keyboardType='number-pad'
                            secureTextEntry = {!showPassword}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            // value={value}
                            errorMessage={errors.password?.message}
                        />
                    )}
                />
                <Button title="Log In"  color = {'#F6DE51'} titleStyle = {{color: '#000'}}
                onPress={handleSubmit(onLogin)}
                loading = {isSubmitting}
                disabled = {!isValid}
                />
            </Card>
        </View>
    )
}

export default LoginScreen