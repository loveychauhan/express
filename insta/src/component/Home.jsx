import Button from "./Button";
import Container from "./Container";
import Stories from "./Stories";

const Home = () => {
  return (
    <section>
      <header className="flex justify-between p-4 flex-wrap">
        <div className="w-[150px] h-[150px]  ">
          <img
            className=" w-full h-full rounded-full object-fill  "
            src="/pfp.png"
            alt="pfp photo"
          />
        </div>

        <article className="grid items-start  ">
          <div className="flex flex-wrap justify-between items-center gap-2 ">
            <p className="mr-3">Lovey</p>
            <Button name="Edit profile" />
            <Button name="View archive" />
            <p>⚙️</p>
          </div>
          <div className="flex justify-between gap-2 ">
            <p>
              0 <span>post</span>
            </p>
            <p>
              12 <span>follower</span>
            </p>
            <p>
              32 <span>following</span>
            </p>
          </div>
          <div className="flex justify-between gap-2 ">
            <p>@loveysingh</p>
          </div>
        </article>
      </header>
      <div className="flex flex-wrap gap-12 items-center my-8">
        <Stories />
        <Stories />
        <Stories />
        <Stories />
      </div>
      <Container />
      <hr />
    </section>
  );
};

export default Home;
