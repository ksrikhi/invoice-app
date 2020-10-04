
import { custmerDetailKey } from '../../theme/constant';
import { AsyncStorage } from 'react-native';
 
 const getCustomerDetail = async () => {
    try {
        let custmerDetail = await AsyncStorage.getItem(custmerDetailKey);
        if (custmerDetail) {
           return (JSON.parse(custmerDetail));
        }
    }
    catch (error) {
        alert(error);    
    }
    return {};
}

export default getCustomerDetail