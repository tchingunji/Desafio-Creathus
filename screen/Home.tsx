import { View, Text, Image} from 'react-native';
import Menu from '../components/Menu';
import Curso from '../components/Curso';
import Footer from '../components/footer';
export default function Home() {
  return (
    <View>
      <Menu/>
      <View style={{flexDirection:"row", padding:10}}>
        <Text style={{fontSize:19,fontFamily:"Arial", marginRight:35,marginLeft:30}}>Agenda De Cursos</Text>
        <Image source={ require('../imgs/filter.png') } style={{width:'32px',height:'32px',justifyContent:"center",marginLeft:35}}/>  
      </View>
      <Curso/>
      <Footer/>
    </View>
  );
}
