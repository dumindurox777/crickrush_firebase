import React from 'react';
import {StyleSheet,FlatList, Text, View,Alert} from 'react-native';
import firebase from 'firebase';




export default class Matches extends React.Component {

  constructor(props) {
    super(props);
    this.state  = {match:'', matches:[]};

}

 

  componentDidMount(){
      var config = {
        apiKey: "AIzaSyCydHQtcGZpExTtvSlKYnRFeeKCfbE7ZS8",
        authDomain: "crickrush.firebaseapp.com",
        databaseURL: "https://crickrush.firebaseio.com",
        projectId: "crickrush",
        storageBucket: "crickrush.appspot.com",
        messagingSenderId: "165079865320"
    };
      firebase.initializeApp(config);
      console.log(firebase);
    



        var match_array=[];  
        

        var ref=firebase.database().ref('matches').on('value',(adata)=>{
          Alert.alert(adata.toJSON().toString());
          var dataJson = adata.toJSON();
          for(const key in dataJson){      
                
      
          
            firebase.database().ref('matches/'+key).on('value',(data)=>{
      

              console.log(data.toJSON().toString());
              
              var value = data.toJSON();
          



                  match_array.push({
                    key:value.key,
                    moreDetails:value.moreDetails,
                    season:value.season,
                    shortName:value.shortName,
                    status:value.status,
                    statusOverview:value.statusOverview,
                    statusShortDescription:value.statusShortDescription
                  });
              
              
              this.setState({matches:match_array});        
                            
                      

            
            });
          }
        });
                    
                  
      
                  
                      
            

              



   }

  render() {
      return (
        <View>
            <Text>{this.props.label}</Text>
            <View>
                      <FlatList  
                          data={this.state.matches}
                          renderItem={
                              ({item, index}) => {
                                  return (
                                    <View style={styles.postbox}>                                    
                                          <Text>{item.key}</Text>
                                          <Text>{item.moreDetails}</Text>
                                          <Text>{item.season}</Text>
                                          <Text>{item.shortName}</Text>
                                          <Text>{item.status}</Text>
                                          <Text>{item.statusOverview}</Text>
                                          <Text>{item.statusShortDescription}</Text>
                                                                            
                                          
                                      </View>
                                  );
                              }
                          }
                          key={
                              (item) => item.toString()
                          }
                      />                
                  </View>  
        </View>
      );
  
    }


}

const styles = StyleSheet.create({
  img:{
    width:300,
    height:100,
  },
  container: {
      flex: 1,
      width:'100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:30,
    },
    postbox: {
      flex: 1,
      borderWidth:1,
      borderRadius: 10,
      borderColor:'#5998C5',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:30,
    },
});