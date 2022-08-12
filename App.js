import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { AuthProvider } from './screens/context/AuthContext';
import Home from './screens/Home';
import HomePetugas from './screens/HomePetugas';
import Account from './screens/Account';
import AccountPetugas from './screens/AccountPetugas';
import Call from './screens/Call';
import Notification from './screens/Notification';
import Ordered from './screens/Ordered';
import MenerimaPanggilan from './screens/MenerimaPanggilan';
import LanggananUser from './screens/LanggananUser';
import BerlanggananUser from './screens/BerlanggananUser';
import HistoryOrder from './screens/HistoryOrder';
import StatusCall from './screens/StatusCall';
import TopUp from './screens/TopUp';
import IsiSaldo from './screens/IsiSaldo';
import TarikSaldo from './screens/TarikSaldo';
import TrashSetting from './screens/TrashSetting';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import Navigation from './screens/navigation';
import TarikSaldoPetugas from './screens/TarikSaldoPetugas';
import IsiSaldoPetugas from './screens/IsiSaldoPetugas';
import TopUpPetugas from './screens/TopUpPetugas';
import TrashSettingOff from './screens/TrashSettingOff';
import LanggananPetugas from './screens/LanggananPetugas';
import StatusAkun from './screens/StatusAkun';
import StatusOff from './screens/StatusOff';
import StopLangganan from './screens/StopLangganan';
import PanggilanMasuk from './screens/PanggilanMasuk';
import DataSampah from './screens/DataSampah';
import DetailSampah from './screens/DetailSampah';
import OrderSelesai from './screens/OrderSelesai';
import MenentukanJadwal from './screens/MenentukanJadwal';
import KelolaProfilPetugas from './screens/KelolaProfilPetugas';
import UbahProfilPetugas from './screens/UbahProfilPetugas';
import UbahProfilUser from './screens/UbahProfilUser';
import KelolaProfilUser from './screens/KelolaProfilUser';
import HargaSampah from './screens/HargaSampah';
import MasukanDataSampah from './screens/MasukanDataSampah';
import UbahDataHargaSampah from './screens/UbahDataHargaSampah';
import MetodeTopUp from './screens/MetodeTopUp';
import PenarikanSaldo from './screens/PenarikanSaldo';
import Navigasi from './screens/navigation/Navigasi';
import DaftarLanggananPetugas from './screens/DaftarLanggananPetugas';
import TambahDataHargaSampah from './screens/TambahDataHargaSampah';

const App = () => {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.root}>
        <Navigation />
      </SafeAreaView>
    </AuthProvider>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF '
  },
});

export default App;
