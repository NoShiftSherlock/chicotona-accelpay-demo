/* Chicotona Mezcal demo data, 2026-11-07.
 REAL: products, names, images, copy and prices from https://www.chicotonamezcal.com (Shopify /products.json; the store runs on Flaviar Checkout).
 Network retailers: active, in-stock (0 < stock < 9000) LiquidCommerce retailer variants matched on product name, 2026-11-07.
 Gopuff ZIPs: delivery ZIPs of Gopuff locations carrying the product in the gopuff_feed availability snapshot, 2026-11-07.
 NOT REAL: no order is placed; shipping ($14.99), Gopuff fee ($4.99) and 8% tax are illustrative. */
window.DEMO = {
 "key": "chicotona",
 "brand": "Chicotona Mezcal",
 "storeName": "Chicotona Mezcal",
 "orderPrefix": "CHI",
 "catalog": {
  "papalometl": {
   "name": "Chicotona Mezcal Papalometl",
   "short": "Chicotona Mezcal Papalometl",
   "size": "750ML",
   "tag": "mezcal",
   "price": 12499,
   "image": "assets/p-papalometl.png",
   "gallery": [
    "assets/p-papalometl.png"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "Earthy. Funky. Floral in all the right ways. Born in the heart of Guerrero, Chicotona is a tribute to our abuelo, Don Lauro, and the spirit of the snake that roams the agave fields. Bold yet approachable, it finishes with rustic earthiness and a silky, complex depth that’s effortlessly drinkable.",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "espadin": {
   "name": "Chicotona Mezcal Espadin",
   "short": "Chicotona Mezcal Espadin",
   "size": "750ML",
   "tag": "mezcal",
   "price": 5499,
   "image": "assets/p-espadin.png",
   "gallery": [
    "assets/p-espadin.png"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "Bright. Balanced. Smoke that doesn’t shout. Born in the heart of Guerrero, Chicotona is a tribute to our abuelo, Don Lauro, and the spirit of the snake that roams the agave fields. Smooth yet lingering, its gentle smoke stays with you, never overpowering, always unforgettable.",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  }
 },
 "order": [
  "papalometl",
  "espadin"
 ],
 "defaultHandle": "papalometl",
 "retailers": [],
 "realHandles": [],
 "gopuff": null,
 "noShip": [
  "AK",
  "HI"
 ],
 "rates": {
  "shipping": 1499,
  "freeOver": 0,
  "gopuff": 499
 },
 "taxRate": 0.08,
 "expressAddress": [
  "233 S Wacker Dr",
  "Chicago",
  "60606"
 ],
 "fulfilIcon": "assets/logo.png",
 "rbNote": "",
 "text": {
  "fulfilReal": "In stock at licensed retailers in our network today. Enter your ZIP at checkout for delivery or shipping.",
  "fulfilLaunch": "Ships from a licensed retailer in your state. Rates show at checkout once you enter your address.",
  "cardReal": "In stock at network retailers",
  "cardLaunch": "Ships from licensed retailers",
  "soldOut": "Sold out.",
  "noShip": "We are not shipping to {state} yet.",
  "launchNote": "In the demo, no network retailer stocks this bottle yet. Licensed retailers are connected during onboarding, which takes about one week."
 }
};
