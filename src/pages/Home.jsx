import SignupForm from "../components/SignupForm";

export default function Home() {
  return (
    <div className="bigcontainer">
      <div className="leftcontainer">
        <p className="textleft">Discover new things on Superapp</p>
      </div>
      <div className="rightcontainer">
        <SignupForm />
      </div>
    </div>
  );
}
