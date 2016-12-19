import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import styles from './style';

class BookItem extends Component {

    constructor(props) {
        super(props);

    }

    static defaultProps = {};

    static propTypes = {
        coverURL: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
    };

    render() {

        const {coverURL,author,title} = this.props;

        return (
            <View style={styles.bookItem}>
                <Image style={styles.cover} source={{uri:coverURL}}/>
                <View style={styles.info}>
                    <Text style={styles.author}>{author}</Text>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
        );
    }
}

export default BookItem;