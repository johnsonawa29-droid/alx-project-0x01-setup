import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, company, address }) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">@{company.name}</p>

      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <p><span className="font-semibold">Email:</span> {email}</p>
        <p><span className="font-semibold">Phone:</span> {phone}</p>
        <p><span className="font-semibold">Website:</span> {website}</p>
        <p><span className="font-semibold">Address:</span> {address.city}, {address.street}, {address.suite}</p>
      </div>
    </div>
  );
};

export default UserCard;
