import FormLayout from "../../Layout/FormLayout/FormLayout";
import { getImageUrl } from "../../utils/image.utils";
import RegisterForm from "./components/RegisterForm";

function Register() {
  const imageUrl = getImageUrl("png/art-new-account.png");
  const imgSrcSet = [
    { type: "image/webp", src: getImageUrl("webp/art-new-account.webp") },
  ];

  return (
    <FormLayout img={imageUrl} srcSet={imgSrcSet}>
      <RegisterForm imageUrl={imageUrl} imgSrcSet={imgSrcSet} />
    </FormLayout>
  );
}

export default Register;
