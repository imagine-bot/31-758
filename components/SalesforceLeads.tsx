import { useEffect, useState } from 'react';

interface SalesforceLeadsProps {
  accountName: string | undefined;
  accessToken: string | undefined;
  instanceUrl: string | undefined;
}

interface Lead {
  Id: string;
  Name: string;
  // Add other lead properties as needed
}

export const SalesforceLeads = ({ accountName, accessToken, instanceUrl }: SalesforceLeadsProps) => {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    if (accountName && accessToken && instanceUrl) {
      fetchLeads();
    }
  }, [accountName, accessToken, instanceUrl]);

  const fetchLeads = async () => {
    const response = await fetch(`${instanceUrl}/services/data/v50.0/query?q=SELECT+Id,Name+FROM+Lead+WHERE+IsConverted=false+AND+Account.Name='${accountName}'`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    setLeads(data.records);
  };

  return (
    <div>
      <h1>Active Leads for {accountName}</h1>
      {leads.map((lead) => (
        <div key={lead.Id}>
          <h2>{lead.Name}</h2>
          {/* Render other lead properties as needed */}
        </div>
      ))}
    </div>
  );
};