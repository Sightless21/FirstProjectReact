import { StyleSheet } from "react-native";
 
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    borderColor: "#f5f5f5", //ตั้งค่าสีพื้นหลังเป็นสีเทาอ่อน
  },
  profileImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
    marginTop: 50,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00008b",
  },
});
 
const stylesPractice = StyleSheet.create({
  container: {
   // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ffffff",
 
  },
  header: {
    backgroundColor: "#808D7C",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop:100,
    width: '100%',

  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitleText: {
    fontSize: 16,
    color: "#fff",
  },
  footer: {
    backgroundColor: "#f8f8f8",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  content: {
 //   flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 16,
    paddingHorizontal: 8,
    width: "80%",
    borderRadius: 8,
  },
  //Login Styles
  containerLogin: {
    justifyContent: "center",
    padding: 20,
    marginTop: 50,
    backgroundColor: '#ffffff', // ต้งัค่าสีพ้ืนหลงัเป็นสีขาว
    borderRadius: 10, // เพิ่มความมนให้กบัขอบคอนเทนเนอร์
    elevation: 3, // เพิ่มเงาให้กบัคอนเทนเนอร์(เฉพาะ Android)
    width: '95%', // ต้งัความกวา้งของ container ให้เต็มหน้าจอ
    },
    inputLogin: {
    height: 45, // เพิ่มความสูงของ TextInput
    borderColor: "gray", // เปลี่ยนสีขอบเป็นสีเทาอ่อน
    borderWidth: 1,
    borderRadius: 8, // เพิ่มความมนให้กับขอบ TextInput
    marginBottom: 15, // เพิ่มระยะห่างด้านล่างระหวา่ง TextInput
    paddingHorizontal: 15, // เพิ่มระยะห่างภายใน TextInput
    backgroundColor: "#f9f9f9", // ต้้งค่าสีพื้นหลังของ TextInput
    }
});
 
export { styles, stylesPractice };