import Layout from '../components/template/Layout';
import useAppData from '../data/hook/useAppData';

export default function Notifications() {
  const { switchTheme } = useAppData();

  return (
    <Layout title="Notifications Page" subtitle="Manage your notifications...">
      <button onClick={switchTheme}>Switch Theme</button>
    </Layout>
  );
}
