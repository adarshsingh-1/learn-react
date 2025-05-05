function App() {

  return (
    <>
        <h1> What is React?</h1>
      <ul>
        <li>React is a JavaScript library for building user interfaces.</li>
        <li>It allows developers to create large web applications that can change data, without reloading the page.</li>
        <li>React is fast, scalable, and simple.</li>
        <li>It works only on user interfaces in web and mobile applications.</li>
        <li>It is maintained by Facebook and a community of individual developers and companies.</li>
      </ul>
      <h1>Why Vite?</h1>
      <ul>
        <li>Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.</li>
        <li>Vite is a French word meaning "fast".</li>
        <li>Vite is a build tool that focuses on speed and performance.</li>
        <li>Vite is a build tool that uses native ES modules in the browser.</li>
        <li>Vite is a build tool that uses Rollup under the hood for production builds.</li>
        <li>Vite is a build tool that uses Hot Module Replacement (HMR) for development.</li>
      </ul>
      <h1>Difference Between Create React App and Vite</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Create React App (CRA)</th>
            <th>Vite</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Setup Command</td>
            <td>npx create-react-app</td>
            <td>npm create vite@latest</td>
          </tr>
          <tr>
            <td>Performance</td>
            <td>Slower build and development times</td>
            <td>Faster build and development times</td>
          </tr>
          <tr>
            <td>Build Tool</td>
            <td>Uses Webpack</td>
            <td>Uses Rollup for production and native ES modules for development</td>
          </tr>
          <tr>
            <td>Hot Module Replacement (HMR)</td>
            <td>Supported but slower</td>
            <td>Highly optimized and faster</td>
          </tr>
          <tr>
            <td>Configuration</td>
            <td>More opinionated and less flexible</td>
            <td>Lightweight and highly configurable</td>
          </tr>
          <tr>
            <td>Use Case</td>
            <td>Good for traditional React projects</td>
            <td>Ideal for modern web projects with better performance</td>
          </tr>
        </tbody>
      </table>

      
    </>
  )
}

export default App
