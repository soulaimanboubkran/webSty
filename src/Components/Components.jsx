import { Link } from "react-router-dom";
import { Componentsdata } from "../Data/ComponenetsData";

const Components = () => {
  return (
    <>
      <section>
        <main className="py-10">
          <div className="pb-10">
            <h1 className="text-4xl font-bold uppe">All Websty components</h1>
          </div>
          <div className="pb-10">
            <p className="text-gray-500">55 Components</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Componentsdata.map((item, index) => (
              <Link
                to={`/${item.link}`}
                key={index}
                className="card p-1 bg-base-100 border hover:shadow-xl"
              >
                <figure className="p-2 rounded-xl">
                  <img src={item.thubmnail} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </section>
    </>
  );
};

export default Components;
