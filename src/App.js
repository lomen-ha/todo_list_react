import Input from './components/Input';
import Header from './components/Header';
import Todos from './components/Todos';
import Layout from './components/Layout';
import { ThemeProvider } from './context/DarkMode';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Header />
        <Todos />
        <Input />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
