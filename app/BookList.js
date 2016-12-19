import React, {Component} from 'react';
import {
    View,
    Text,
    ListView,
    Image,
} from 'react-native';
import BookItem from './BookItem';
import styles from './style';
import * as URL from './Api';


class BookList extends Component {

    constructor(props) {
        super(props);

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows([]),
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });

        this._refreshData();
    }

    _refreshData() {
        fetch(URL.BookRes)
            .then((res) => res.json())
            .then((resJson) => {
                console.log(resJson)

                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(resJson.results.books),
                    isLoading: false
                })

            })
            .catch((err) => {
                console.log(err.message)
                this.setState({
                    isLoading: false
                })
            })
    }

    _renderRow(rowData) {
        return <BookItem coverURL={rowData.book_image}
                         author={rowData.title}
                         title={rowData.author}/>
    }

    _renderHeader() {
        return <View style={styles.sectionDivider}>
            <Text style={styles.headingText}>
                BestSellers in Hardcover Fiction
            </Text>
        </View>
    }

    _renderFooter() {
        return <View style={[styles.sectionDivider,{backgroundColor:'#FFFFFF'}]}>
            <Text style={styles.footerText}>Data from NewYork Times bestsellers list.</Text>
        </View>
    }

    render() {

        const loadingView = (this.state.isLoading) ?
            <Image style={styles.img} source={require('../loading.gif')}/>
            : null;

        return (
            <View style={styles.container}>
                {loadingView}
                <ListView
                    style={{marginTop: 24}}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    renderHeader={this._renderHeader}
                    renderFooter={this._renderFooter}
                    enableEmptySections={true}/>
            </View>

        );
    }
}

export default BookList;