const Section = ({ title }) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

const Instamart = () => {
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section title={"About Instamart"} />
      {/* <AboutInstamart />
      <DetailsofInstamart />
      <TeamInstamart/>
      <Product />
      <Careers/> */}
    </div>
  );
};

export default Instamart;
