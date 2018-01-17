import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { WalletsPage } from '../pages/wallets/wallets';

import { File } from '@ionic-native/file';
import { NativeStorage } from '@ionic-native/native-storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalApiProvider } from '../providers/local-api/local-api.provider';
import { WalletProvider } from '../providers/wallet/wallet.provider';
import { IonicStorageModule } from '@ionic/storage';
import { StorageApiProvider } from '../providers/storage-api/storage-api.provider';
import { WalletDetailPage } from '../pages/wallet-detail/wallet-detail';
import { SkyPipe } from '../pipes/sky/sky.pipe';
import { SendSkycoinPage } from '../pages/send-skycoin/send-skycoin';
import { ReactiveFormsModule } from '@angular/forms';
import { CounttoDirective } from '../directives/countto/countto';
import { BalanceComponent } from '../components/balance/balance';
import { WalletOptionPipe } from '../pipes/wallet-option/wallet-option';
import { SecureStorageProvider } from '../providers/secure-storage/secure-storage';
import { SecureStorage } from '@ionic-native/secure-storage';
import { Clipboard } from '@ionic-native/clipboard';
import { PincodePage } from '../pages/pincode/pincode';
import { AddressPipe } from '../pipes/address/address';
import { QrCodeComponent } from '../components/qr-code/qr-code';
import { TransactionsPage } from '../pages/transactions/transactions';
import { BackendApiProvider } from '../providers/backend-api/backend-api.provider';
import { HttpModule } from '@angular/http';
import { ModalComponent } from '../components/modal/modal';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';
import { TabsComponent } from '../components/tabs/tabs';
import { AddWalletPage } from '../pages/add-wallet/add-wallet';
import { LoadWalletPage } from '../pages/load-wallet/load-wallet';
import { ModalNoStorageComponent } from '../components/sky-modal/modal-no-storage/modal-no-storage';
import { ModalDisclaimerComponent } from '../components/sky-modal/modal-disclaimer/modal-disclaimer';

@NgModule({
  declarations: [
    MyApp,
    AddWalletPage,
    DisclaimerPage,
    LoadWalletPage,
    PincodePage,
    SendSkycoinPage,
    TransactionsPage,
    WalletDetailPage,
    WalletsPage,
    BalanceComponent,
    ModalComponent,
    QrCodeComponent,
    TabsComponent,
    CounttoDirective,
    SkyPipe,
    WalletOptionPipe,
    AddressPipe,
    ModalNoStorageComponent,
    ModalDisclaimerComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AddWalletPage,
    DisclaimerPage,
    LoadWalletPage,
    MyApp,
    PincodePage,
    SendSkycoinPage,
    TransactionsPage,
    WalletDetailPage,
    WalletsPage,
    ModalNoStorageComponent,
    ModalDisclaimerComponent,
  ],
  providers: [
    File,
    NativeStorage,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackendApiProvider,
    LocalApiProvider,
    WalletProvider,
    StorageApiProvider,
    SecureStorage,
    SecureStorageProvider,
    Clipboard,
  ]
})
export class AppModule {}
