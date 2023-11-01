import { SalesforceLeads } from '../components/SalesforceLeads';
import Login from '../components/Login';

export default function Home() {
  return (
    <main className="bg-white">
      <SalesforceLeads 
        accountName={process.env.SALESFORCE_ACCOUNT_NAME} 
        accessToken={process.env.SALESFORCE_ACCESS_TOKEN} 
        instanceUrl={process.env.SALESFORCE_INSTANCE_URL} 
      />
      <Login username="exampleUser" password="examplePassword" />
    </main>
  );
}