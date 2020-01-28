import { navigate } from "gatsby"

const isLogin = () => {
  if (sessionStorage.getItem("isLogin") !== "true") {
    navigate("/login")
    return false
  }
  return true
}

export default isLogin
