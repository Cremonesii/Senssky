int pinoSensor = A5;
int valorLido = 0;
float temperatura = 0;
int linha = 0;

void setup() {
Serial.begin(9600); 
}

void loop() {
valorLido = analogRead(pinoSensor); 
temperatura = (valorLido * 0.00488); 
temperatura = temperatura * 100; 

Serial.println(temperatura);

delay(5000); // Tempo 5 seg para realizar outra leitura
}