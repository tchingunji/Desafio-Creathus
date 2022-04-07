import { View, Text,ActivityIndicator, FlatList, Image, TouchableOpacity, Linking, ScrollView} from 'react-native'
import React,{useEffect,useState} from 'react'
import Moment from 'moment'

interface Repository{
    eventTitle:string
    trackTitle:string
    eventGroupIndex:string
    startDate:string
    campusName:string
    url:string
    modalidade:string
}
interface week{
    day:string,
}

export default function Curso() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Repository[]>([]);
    var today="";
    Moment.locale('pt-br');
    const getCursos = async () => {
        try {
            const response = await fetch('https://gist.githubusercontent.com/creathusjobs/3becc7008c96ffdacdf561efb76a3ecb/raw/92b9d8e42b85f6d722293f2abb44051f39fdefea/response.json');
            const json = await response.json();
            setData(json.events);
            } catch (error) {
            console.error(error);
            } finally {
            setLoading(false);
            }
        }
        
        function sort_by_key(array:Repository[])
        {
            return array.sort(function(a:Repository, b:Repository)
            {
                var x = a.startDate; var y = b.startDate;
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }

    useEffect(() => {
        getCursos();           
    }, []);
 
        const Semana=(d:week)=>{
            console.log(today+"=="+d.day.substring(0,d.day.indexOf(" ")));
            if(today==d.day.substring(0,d.day.indexOf(" "))){
                return(<View></View>);
            }else{
                today=d.day.substring(0,d.day.indexOf(" "));
                return(
                    <View style={{backgroundColor:"#eee", padding:17,flexDirection:"row"}}>
                        <Image source={ require('../imgs/calendario.png') } style={{width:'25px',height:'25px', marginRight:"9px"}}/>        
                        <Text style={{color:"#5F6065",fontWeight:"bold",fontSize:17}}>{d.day}</Text>                            
                    </View>
                )
            }
        }       
    
    const Banner=()=>{
        sort_by_key(data)
        return (
            <ScrollView style={{ flex: 1 }}>
              {isLoading ? <ActivityIndicator/> : (
                <View>
                <FlatList
                  data={data.slice(0,1)}                  
                  renderItem={({ item }) => (
                    <View>
                        
                        <Semana day={Moment(item.startDate).format('dddd DD/MM').replace("-feira","")}/>
                        <View>
                            <View style={{backgroundColor: 'white',padding:10,width: '100%',marginVertical: 10,}}>
                                <View style={{backgroundColor:"#F1F1F3",flexDirection:"row",padding:10,borderTopLeftRadius:10,borderTopRightRadius:10}}>
                                    <Text style={{marginRight:5}}>TRILHA</Text>
                                    <Text style={{color:"#69e9f5",marginRight:10}}>{item.trackTitle.toUpperCase()}</Text>
                                    <Text style={{}}>* AULA {item.eventGroupIndex}</Text>
                                </View>
                                <View style={{backgroundColor:"#fff", padding:9,shadowColor: "#000",shadowOffset: {width: 0,height: 5,}, shadowOpacity:0.34,shadowRadius: 6.27,borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                                    <View style={{padding:10}}>
                                        <Text style={{fontSize: 18,fontWeight: '600',marginBottom: 13,}}>{item.eventTitle}</Text>
                                    </View>
                                    <View style={{flexDirection:"row",padding:5}}>
                                        <View style={{margin:17}}>
                                            <Text style={{marginLeft:20}}>DATA</Text>
                                <Image source={ require('../imgs/calendario.png') } style={{width:'15px',height:'15px',}}/>
                                            <Text style={{marginLeft:20}}>{Moment(item.startDate).format('DD/MM')}</Text>
                                        </View>
                                        <View style={{margin:17}}>
                                            <Text style={{marginLeft:20}}>HORA(BRT)</Text>
                                <Image source={ require('../imgs/time.png') } style={{width:'15px',height:'15px',}}/>
                                            <Text style={{marginLeft:20}}>{Moment(item.startDate).format('hh:mm')}</Text>
                                        </View>
                                        <View  style={{margin:17}}>
                                            <Text style={{marginLeft:20}}>CAMPO</Text>
                                <Image source={ require('../imgs/local.png') } style={{width:'15px',height:'15px'}}/>
                                            <Text style={{marginLeft:20}}>{Moment(item.startDate).format('hh:mm')}</Text>
                                        </View>
                                    </View>
                                    <View>
                                    <TouchableOpacity style={{padding:15,backgroundColor:"#69e9f5",borderRadius:10, alignItems:"center"}}onPress={() => { Linking.openURL(item.url); }} >
                                        <Text style={{color:"#fff",fontSize:18}}>Acessar aula online</Text>
                                    </TouchableOpacity>   
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                  )}
                />
               <FlatList
                  data={data.slice(1)}                  
                  renderItem={({ item }) => (
                    <View>
                        <Semana day={Moment(item.startDate).format('dddd DD/MM').replace("-feira","")}/>
                        <View>
                            <View style={{backgroundColor: 'white',padding:10,width: '100%',marginVertical: 10,}}>
                                <View style={{backgroundColor:"#F1F1F3",flexDirection:"row",padding:10,borderTopLeftRadius:10,borderTopRightRadius:10}}>
                                    <Text style={{marginRight:5}}>TRILHA</Text>
                                    <Text style={{color:"#69e9f5",marginRight:10}}>{item.trackTitle.toUpperCase()}</Text>
                                    <Text style={{}}>* AULA {item.eventGroupIndex}</Text>
                                </View>
                                <View style={{backgroundColor:"#fff", padding:9,shadowColor: "#000",shadowOffset: {width: 0,height: 5,}, shadowOpacity:0.34,shadowRadius: 6.27,borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                                    <View style={{padding:10}}>
                                        <Text style={{fontSize: 18,fontWeight: '600',marginBottom: 13,}}>{item.eventTitle}</Text>
                                    </View>
                                    <View style={{flexDirection:"row",padding:5}}>
                                        <View style={{margin:17}}>
                                            <Text style={{marginLeft:20}}>DATA</Text>
                                <Image source={ require('../imgs/calendario.png') } style={{width:'15px',height:'15px',}}/>
                                            <Text style={{marginLeft:20}}>{Moment(item.startDate).format('DD/MM')}</Text>
                                        </View>
                                        <View style={{margin:17}}>
                                            <Text style={{marginLeft:20}}>HORA(BRT)</Text>
                                <Image source={ require('../imgs/time.png') } style={{width:'15px',height:'15px',}}/>
                                            <Text style={{marginLeft:20}}>{Moment(item.startDate).format('hh:mm')}</Text>
                                        </View>
                                        <View  style={{margin:17}}>
                                            <Text style={{marginLeft:20}}>CAMPO</Text>
                                <Image source={ require('../imgs/local.png') } style={{width:'15px',height:'15px'}}/>
                                            <Text style={{marginLeft:20}}>{Moment(item.startDate).format('hh:mm')}</Text>
                                        </View>
                                    </View>
                                    <View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                  )}
                  />
                </View>
              )}
            </ScrollView>
        );          
    }

  return (
    <View>
      <Banner/>
    </View>
  )
}