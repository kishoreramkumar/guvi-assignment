import Button from "components/Button";
import Image from "components/Image";
import Input from "../../components/Input";
import FormLayout from "../../Layout/FormLayout/FormLayout";
import { getImageUrl } from "../../utils/image.utils";
import LoginForm from "./components/LoginForm";

function Login() {
  const imageUrl = getImageUrl("png/art-signin.png");
  const imgSrcSet = [
    { type: "image/webp", src: getImageUrl("webp/art-signin.webp") },
  ];

  return (
    <FormLayout img={imageUrl} srcSet={imgSrcSet}>
      <LoginForm />
    </FormLayout>
  );
}

export default Login;
