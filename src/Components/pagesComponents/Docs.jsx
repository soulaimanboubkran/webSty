const Docs = () => {
  return (
    <section className="py-20">
      <div className="pt-5">
        <h1 className="text-4xl font-bold">
          Install daisyUI as a Tailwind CSS plugin
        </h1>
        <br />
        <p className="font-semibold">
          How to install daisyUI as a Tailwind CSS plugin?
        </p>
      </div>

      <div>
        <p className="text-gray-700 mt-10 mb-10">
          To use the Components , you need to install some configurations in
          your project.
        </p>

        <p className="py-5 text-gray-600">
          You need{" "}
          <a className="underline" href="https://nodejs.org/en/download/">
            Node.js
          </a>{" "}
          and{" "}
          <a href="https://tailwindui.com/" className="underline ">
            Tailwind CSS
          </a>{" "}
          installed.
        </p>
        <p className="py-5 text-gray-600">
          1 Install{" "}
          <a className="underline" href="https://daisyui.com">
            daisyUI
          </a>{" "}
          :
        </p>

        <div className="mockup-code">
          <pre data-prefix="$">
            <code>npm i daisyui</code>
          </pre>
        </div>

        <p className="py-5 text-gray-600">
          2 Then add{" "}
          <a className="underline" href="https://daisyui.com">
            daisyUI
          </a>{" "}
          to your tailwind.config.js files:
        </p>

        <div className="mockup-code">
          <pre data-prefix="$">
            <code>{`module.exports = {
              //...
              plugins: [require("daisyui")],
            }`}</code>
          </pre>
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-bold py-10">
          Add component classes to your HTML
        </h1>
      </div>
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>{`<button
            className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
            Button
     </button>`}</code>
        </pre>
      </div>

      <div>
        <div className="py-10">
          <h1 className="text-3xl font-bold">
            Welcome to WEBSTY – Your Ultimate Tailwind CSS Component Hub!
          </h1>{" "}
          <br />
          WEBSTY is a cutting-edge platform designed to revolutionize the way
          you integrate Tailwind CSS components into your web projects. Tailwind
          CSS is known for its utility-first approach and flexibility, and
          WEBSTY takes it to the next level by providing a curated collection of
          meticulously crafted components to enhance your web development
          experience. 
          <p className="font-bold text-xl py-7">Unleash the Power of Tailwind CSS Components: </p><br /> At WEBSTY,
          we understand the importance of efficiency and aesthetics in web
          development. Our platform offers an extensive library of ready-to-use
          components, each thoughtfully designed to seamlessly integrate with
          Tailwind CSS. From stylish navigation bars to dynamic modals, our
          components cater to a wide range of use cases, empowering you to
          create stunning and functional websites with ease. 
          <p className="font-bold text-xl py-7">Key Features of:</p>  <br />
         


          <main className="container mx-auto my-8">
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Unleash the Power of Tailwind CSS Components:</h2>
            <p className="text-gray-700 leading-relaxed">
                At <span className="font-semibold">WEBSTY</span>, we understand the importance of efficiency and aesthetics in web development. Our platform offers an extensive library of ready-to-use components, each thoughtfully designed to seamlessly integrate with Tailwind CSS. From stylish navigation bars to dynamic modals, our components cater to a wide range of use cases, empowering you to create stunning and functional websites with ease.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Key Features of <span className="text-yellow-300">WEBSTY:</span></h2>
            <ul className="list-disc list-inside">
                <li className="mb-2"> <span className="font-semibold">Diverse Component Library:</span> Explore a vast array of components tailored for various purposes.</li>
                <li className="mb-2"> <span className="font-semibold">Responsive and Customizable:</span> WEBSTY components are built with responsiveness in mind.</li>
                <li className="mb-2"> <span className="font-semibold">Documentation for Seamless Integration:</span> Each component comes with comprehensive documentation.</li>
                <li className="mb-2"> <span className="font-semibold">Community-Driven Collaboration:</span> Join the conversation and contribute to the growth of the Tailwind CSS ecosystem.</li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Choose <span className="text-yellow-300">WEBSTY?</span></h2>
            <ul className="list-disc list-inside">
                <li className="mb-2"> <span className="font-semibold">Save Time and Effort:</span> Cut down on development time by leveraging our pre-built components.</li>
                <li className="mb-2"> <span className="font-semibold">Stay Updated with the Latest Trends:</span> WEBSTY stays on top of design trends.</li>
                <li className="mb-2"> <span className="font-semibold">Build Beautiful Websites Faster:</span> Transform your ideas into reality faster than ever.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-bold mb-4">Get Started with <span className="text-yellow-300">WEBSTY</span> Today:</h2>
            <p className="text-gray-700 leading-relaxed">
                Whether you're a seasoned developer or just starting your web development journey, <span className="font-semibold">WEBSTY</span> is the go-to platform for harnessing the power of Tailwind CSS components. Elevate your projects, save time, and join a vibrant community dedicated to pushing the boundaries of web design.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
                Visit <span className="font-semibold">WEBSTY</span> now and transform the way you build websites with Tailwind CSS components. Your journey to seamless and stylish web development starts here!
            </p>
        </section>
    </main>
        </div>
      </div>
    </section>
  );
};

export default Docs;
