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
      <LoginForm imageUrl={imageUrl} imgSrcSet={imgSrcSet} />
    </FormLayout>
  );
}

export default Login;
