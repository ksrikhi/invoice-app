import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { secondary } from '../../theme/constant';


const ItemCard = ({ item: { discription, unitCost, quantity }, index, edit, remove }) => {
 return (
        <ListItem key={discription}>
            <ListItem.Content >
                <ListItem.Title>{discription}</ListItem.Title>
                <ListItem.Subtitle>{`$${unitCost}, Quantity: ${quantity}`}</ListItem.Subtitle>
            </ListItem.Content>
            <Icon style={styles.icon}
                onPress={() => remove(index)}
                raised
                name='delete'
                color='#f50' />
            <Icon
                onPress={() => edit(index)}
                raised
                name='edit'
                color = {secondary} />
        </ListItem>
    );
}

export default ItemCard;

const styles = StyleSheet.create({
    icon: {
        shadowOffset: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})