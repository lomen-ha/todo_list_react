import Input from './components/Input';
import Header from './components/Header';
import Todos from './components/Todos';
import Layout from './components/Layout';
import { ThemeProvider } from './context/DarkMode';
import { TodosProvider } from './context/Todos';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <TodosProvider>
          <Header />
          <Todos />
          <Input />
        </TodosProvider>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
