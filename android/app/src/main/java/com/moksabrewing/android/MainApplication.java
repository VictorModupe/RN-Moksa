package com.moksabrewing.android;

import android.app.Application;

import com.facebook.react.ReactApplication;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.fabric.crashlytics.RNFirebaseCrashlyticsPackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;
import iyegoroff.RNColorMatrixImageFilters.ColorMatrixImageFiltersPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.imagepicker.ImagePickerPackage;
import com.github.yamill.orientation.OrientationPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.horcrux.svg.SvgPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ColorMatrixImageFiltersPackage(),
            new RNFetchBlobPackage(),
            new SplashScreenReactPackage(),
            new ImagePickerPackage(),
            new OrientationPackage(),
            new VectorIconsPackage(),
            new SvgPackage(),
            new RNFirebasePackage(),
            new RNFirebaseCrashlyticsPackage(), // <-- Add this line
            new RNFirebaseNotificationsPackage(),
            new RNFirebaseMessagingPackage() // <-- Add this line
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
