import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage() {
  return (
    <>
      <Header
        heading="Create a account"
        paragraph="Have an account? "
        linkName="Login"
        linkUrl="/login"
      />
      <Signup />
    </>
  );
}
