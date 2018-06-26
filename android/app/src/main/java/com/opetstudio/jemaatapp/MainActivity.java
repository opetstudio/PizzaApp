package com.opetstudio.jemaatapp;

import android.content.Intent;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.google.android.gms.ads.MobileAds;

import org.devio.rn.splashscreen.SplashScreen; // here

public class MainActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
//        String appPub = "ca-app-pub-3940256099942544/6300978111"
        MobileAds.initialize(this, "ca-app-pub-3773214315606599~9709453424");

        super.onCreate(savedInstanceState);
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "PizzaApp";
    }
}
