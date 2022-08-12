import React from 'react'; 
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../SignInScreen/SignInScreen';
import SignUpScreen from '../SignUpScreen/SignUpScreen';
import Tabs from '../../navbar/Tabs';
import TabsPetugas from '../../navbar/TabsPetugas';
import LanggananUser from '../LanggananUser';
import BerlanggananUser from '../BerlanggananUser';
import Ordered from '../Ordered';
import HistoryOrder from '../HistoryOrder';
import MenerimaPanggilan from '../MenerimaPanggilan';
import Call from '../Call';
import StatusCall from '../StatusCall';
import TopUp from '../TopUp';
import IsiSaldo from '../IsiSaldo';
import TarikSaldo from '../TarikSaldo';
import TrashSetting from '../TrashSetting';
import TarikSaldoPetugas from '../TarikSaldoPetugas';
import IsiSaldoPetugas from '../IsiSaldoPetugas';
import TopUpPetugas from '../TopUpPetugas';
import TrashSettingOff from '../TrashSettingOff';
import LanggananPetugas from '../LanggananPetugas';
import HomePetugas from '../HomePetugas';
import StatusOff from '../StatusOff';
import StatusAkun from '../StatusAkun';
import StopLangganan from '../StopLangganan';
import PanggilanMasuk from '../PanggilanMasuk';
import DataSampah from '../DataSampah';
import DetailSampah from '../DetailSampah';
import OrderSelesai from '../OrderSelesai';
import MenentukanJadwal from '../MenentukanJadwal';
import KelolaProfilPetugas from '../KelolaProfilPetugas';
import UbahProfilPetugas from '../UbahProfilPetugas';
import KelolaProfilUser from '../KelolaProfilUser';
import UbahProfilUser from '../UbahProfilUser';
import HargaSampah from '../HargaSampah';
import MasukanDataSampah from '../MasukanDataSampah';
import UbahDataHargaSampah from '../UbahDataHargaSampah';
import MetodeTopUp from '../MetodeTopUp';
import PenarikanSaldo from '../PenarikanSaldo';
import Navigasi from '../navigation/Navigasi';
import DaftarLanggananPetugas from '../DaftarLanggananPetugas';
import TambahDataHargaSampah from '../TambahDataHargaSampah';



const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Masuk" component={SignInScreen} />
        <Stack.Screen name="Register" component={SignUpScreen} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="TabsPetugas" component={TabsPetugas} />
        <Stack.Screen name="LanggananUser" component={LanggananUser} />
        <Stack.Screen name="BerlanggananUser" component={BerlanggananUser} />
        <Stack.Screen name="Ordered" component={Ordered} />
        <Stack.Screen name="HistoryOrder" component={HistoryOrder} />
        <Stack.Screen name="Call" component={Call} />
        <Stack.Screen name="StatusCall" component={StatusCall} />
        <Stack.Screen name="TopUp" component={TopUp} />
        <Stack.Screen name="IsiSaldo" component={IsiSaldo} />
        <Stack.Screen name="TarikSaldo" component={TarikSaldo} />
        <Stack.Screen name="TrashSetting" component={TrashSetting} />
        <Stack.Screen name="TarikSaldoPetugas" component={TarikSaldoPetugas} />
        <Stack.Screen name="IsiSaldoPetugas" component={IsiSaldoPetugas} />
        <Stack.Screen name="TopUpPetugas" component={TopUpPetugas} />
        <Stack.Screen name="StatusAkun" component={StatusAkun} />
        <Stack.Screen name="TrashSettingOff" component={TrashSettingOff} />
        <Stack.Screen name="LanggananPetugas" component={LanggananPetugas} />
        <Stack.Screen name="StatusOff" component={StatusOff} />
        <Stack.Screen name="HomePetugas" component={HomePetugas} />
        <Stack.Screen name="StopLangganan" component={StopLangganan} />
        <Stack.Screen name="PanggilanMasuk" component={PanggilanMasuk} />
        <Stack.Screen name="DataSampah" component={DataSampah} />
        <Stack.Screen name="DetailSampah" component={DetailSampah} />
        <Stack.Screen name="OrderSelesai" component={OrderSelesai} />
        <Stack.Screen name="MenentukanJadwal" component={MenentukanJadwal} />
        <Stack.Screen name="KelolaProfilUser" component={KelolaProfilUser} />
        <Stack.Screen name="UbahProfilUser" component={UbahProfilUser} />
        <Stack.Screen name="KelolaProfilPetugas" component={KelolaProfilPetugas} />
        <Stack.Screen name="UbahProfilPetugas" component={UbahProfilPetugas} />
        <Stack.Screen name="MasukanDataSampah" component={MasukanDataSampah} />
        <Stack.Screen name="HargaSampah" component={HargaSampah} />
        <Stack.Screen name="UbahDataHargaSampah" component={UbahDataHargaSampah} />
        <Stack.Screen name="MetodeTopUp" component={MetodeTopUp} />
        <Stack.Screen name="PenarikanSaldo" component={PenarikanSaldo} />
        <Stack.Screen name="Navigasi" component={Navigasi} />
        <Stack.Screen name="DaftarLanggananPetugas" component={DaftarLanggananPetugas} />
        <Stack.Screen name="TambahDataHargaSampah" component={TambahDataHargaSampah} />


      </Stack.Navigator>
    </NavigationContainer>


  );
};

export default Navigation;