import { SalesforceLeads } from '../components/SalesforceLeads';

export default function Home() {
  return (
    <main>
      <SalesforceLeads 
        accountName={process.env.SALESFORCE_ACCOUNT_NAME} 
        accessToken={process.env.SALESFORCE_ACCESS_TOKEN} 
        instanceUrl={process.env.SALESFORCE_INSTANCE_URL} 
      />
    </main>
  );
}