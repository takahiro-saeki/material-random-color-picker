import mrcp from '../src/js/index.js';
 
document.body.innerHTML = `
  <style>
    body {
      margin: 0;
    }
    section {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    header {
      background: ${mrcp({type: 'darken'})};
      width: 100%;
      padding: 1rem;
      text-align: center;
    }
    main {
      display: flex;
      flex-direction: row;
      padding: 1rem;
      height: 500px;
      background: ${mrcp({type: 'normal'})};
    }
    aside {
      background: ${mrcp({type: 'lighten', level: 5})};
      padding: 1rem;
      flex: 1;
    }
    div {
      background: ${mrcp({type: 'lighten', level: 4})};
      width: 70%;
      padding: 1rem;
    }
    footer {
      padding: 1rem;
      background: ${mrcp({type: 'darken', color: 'blue'})};
    }
  </style>
  <section>
    <header>material-random-color-picker</header>
    <main>
      <aside>sidebar</aside>
      <div>main</div>
    </main>
    <footer>footer</footer>
  </section>
`

