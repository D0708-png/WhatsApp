import { FlatList } from 'react-native';
import chats from '../../assets/data/chats.json';
import CallListItem from '../components/CallListItem';
import ChatListItem from '../components/ChatListItem';

const CallsScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <CallListItem user={item.user} />}
      style={{ backgroundColor: 'white' }}
    />
  );
};
export default CallsScreen