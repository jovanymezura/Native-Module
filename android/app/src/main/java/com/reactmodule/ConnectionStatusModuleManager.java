package com.reactmodule;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
// import java.util.Callback;


public class ConnectionStatusModuleManager extends ReactContextBaseJavaModule {
  private ConnectivityManager connectivity;
 
 public ConnectionStatusModuleManager (ReactApplicationContext reactContext) {
  super(reactContext);
  connectivity = (ConnectivityManager) reactContext.getSystemService(Context.CONNECTIVITY_SERVICE);
 }
 
 @Override
 public String getName() {
  return "ConnectionStatusModule";
 }
 
 @ReactMethod
 public void checkConnectionStatus(Callback callback) {
  // callback.invoke("NATIVE MODULES RULES");
  String name = null;
  boolean connected = false;
  if (connectivity != null && connectivity.getActiveNetworkInfo() != null) {
    NetworkInfo activeNetwork = connectivity.getActiveNetworkInfo();
    if (activeNetwork.getType() == ConnectivityManager.TYPE_MOBILE) {
      name = activeNetwork.getTypeName();
      connected = true;
    } 
    else if ( activeNetwork.getType() == ConnectivityManager.TYPE_WIFI) {
      name = activeNetwork.getTypeName();
      connected = true;
    };
    callback.invoke(name, connected);
  }
 }
}