#include <TinyGPS++.h>
#include <Ethernet.h>
#include <SoftwareSerial.h>


TinyGPSPlus gps;
EthernetClient client;


static const int RXPin = 3, TXPin = 4;
static const uint32_t GPSBaud = 9600;

byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED }; // mac address



 float lat , lng  ;

// The serial connection to the GPS device
SoftwareSerial ss(RXPin, TXPin);

unsigned long int timeConn = millis(); 

void setup()
{
  Serial.begin(9600);
  Ethernet.begin(mac);
  ss.begin(GPSBaud);

  Serial.println(F("Robojax GPS Demo"));
  Serial.println(F("A simple demonstration of TinyGPS++ with an attached GPS module"));
  Serial.print(F("Testing TinyGPS++ library v. ")); 
  Serial.println(TinyGPSPlus::libraryVersion());
  Serial.println();
}

void loop()
{
  lat = gps.location.lat();
  lng = gps.location.lng();
  // This sketch displays information every time a new sentence is correctly encoded.
  while (ss.available() > 0)
    if (gps.encode(ss.read())){
      sendData(lat,lng);
      displayInfo();
    }
  if (millis() > 5000 && gps.charsProcessed() < 10)
  {
    Serial.println(F("No GPS detected: check wiring."));
    while(true);
  }
 delay(100);
}

void displayInfo()
{
  Serial.print(F("Location: ")); 
  if (gps.location.isValid())
  {
    Serial.print(gps.location.lat(), 6);
    Serial.print(F(","));
    Serial.print(gps.location.lng(), 6);
  }
  else
  {
    Serial.print(F("INVALID"));
  }

  Serial.print(F("  Date/Time: "));
  if (gps.date.isValid())
  {
    Serial.print(gps.date.month());
    Serial.print(F("/"));
    Serial.print(gps.date.day());
    Serial.print(F("/"));
    Serial.print(gps.date.year());
  }
  else
  {
    Serial.print(F("INVALID"));
  }

  Serial.print(F(" "));
  if (gps.time.isValid())
  {
    if (gps.time.hour() < 10) Serial.print(F("0"));
    Serial.print(gps.time.hour());
    Serial.print(F(":"));
    if (gps.time.minute() < 10) Serial.print(F("0"));
    Serial.print(gps.time.minute());
    Serial.print(F(":"));
    if (gps.time.second() < 10) Serial.print(F("0"));
    Serial.print(gps.time.second());
    Serial.print(F("."));
    if (gps.time.centisecond() < 10) Serial.print(F("0"));
    Serial.print(gps.time.centisecond());
  }
  else
  {
    Serial.print(F("INVALID"));
  }
}
void sendData(float lat, float lng) 
{  
    if (client.connect("192.168.188.10",80))
    {
        client.println("POST /php/test.php HTTP/1.1");
        client.println("Host: 192.168.188.10");
        client.println("Content-Length: 8"); 
        client.println("Content-Type: application/x-www-form-urlencoded"); 
        client.println();
        client.print("lat=");
        client.print(lat);
        client.print("&");
        client.print("lng=");
        client.print(lng);
        client.println( "Connection: close" );
        client.stop();
        client.flush();
    }
     else Serial.println("FALSE");
}



 
