import random

ASSET_DATA = {
    "stocks": [
        {"name": "Reliance Industries", "ticker": "RELIANCE.NS", "market_cap": "Large", "sector": "Energy", "predicted_return": 0.15, "volatility": "Low", "price": 2900},
        {"name": "TCS", "ticker": "TCS.NS", "market_cap": "Large", "sector": "IT", "predicted_return": 0.13, "volatility": "Low", "price": 3800},
        {"name": "HDFC Bank", "ticker": "HDFCBANK.NS", "market_cap": "Large", "sector": "Financials", "predicted_return": 0.18, "volatility": "Low", "price": 1600}, # Increased return for testing
        {"name": "Infosys", "ticker": "INFY.NS", "market_cap": "Large", "sector": "IT", "predicted_return": 0.14, "volatility": "Low", "price": 1700},
        {"name": "Bharti Airtel", "ticker": "BHARTIARTL.NS", "market_cap": "Large", "sector": "Telecom", "predicted_return": 0.11, "volatility": "Low", "price": 1200},
        {"name": "ICICI Bank", "ticker": "ICICIBANK.NS", "market_cap": "Large", "sector": "Financials", "predicted_return": 0.17, "volatility": "Low", "price": 1100}, # Increased return
        {"name": "Larsen & Toubro", "ticker": "LT.NS", "market_cap": "Large", "sector": "Capital Goods", "predicted_return": 0.14, "volatility": "Low", "price": 3700},
        {"name": "Bajaj Finance", "ticker": "BAJFINANCE.NS", "market_cap": "Mid", "sector": "Financials", "predicted_return": 0.20, "volatility": "Medium", "price": 7200}, # Increased return
        {"name": "Titan Company", "ticker": "TITAN.NS", "market_cap": "Mid", "sector": "Consumer Discretionary", "predicted_return": 0.16, "volatility": "Medium", "price": 3500},
        {"name": "Dixon Technologies", "ticker": "DIXON.NS", "market_cap": "Mid", "sector": "Electronics", "predicted_return": 0.20, "volatility": "High", "price": 11000},
        {"name": "Godrej Properties", "ticker": "GODREJPROP.NS", "market_cap": "Mid", "sector": "Real Estate", "predicted_return": 0.17, "volatility": "Medium", "price": 2700},
        {"name": "Mindtree", "ticker": "MINDTREE.NS", "market_cap": "Mid", "sector": "IT", "predicted_return": 0.19, "volatility": "Medium", "price": 5000},
        {"name": "CDSL", "ticker": "CDSL.NS", "market_cap": "Small", "sector": "Financials", "predicted_return": 0.25, "volatility": "High", "price": 2100}, # Increased return
        {"name": "Affle India", "ticker": "AFFLE.NS", "market_cap": "Small", "sector": "IT", "predicted_return": 0.22, "volatility": "High", "price": 1200},
        {"name": "Tanla Platforms", "ticker": "TANLA.NS", "market_cap": "Small", "sector": "IT", "predicted_return": 0.23, "volatility": "High", "price": 1000},
        {"name": "Happiest Minds", "ticker": "HAPPSTMNDS.NS", "market_cap": "Small", "sector": "IT", "predicted_return": 0.24, "volatility": "High", "price": 900},
        {"name": "Fineotex Chemical", "ticker": "FCL.NS", "market_cap": "Small", "sector": "Chemicals", "predicted_return": 0.26, "volatility": "High", "price": 400},
        {"name": "Asian Paints", "ticker": "ASIANPAINT.NS", "market_cap": "Large", "sector": "Chemicals", "predicted_return": 0.10, "volatility": "Low", "price": 2900},
        {"name": "Bajaj Auto", "ticker": "BAJAJ-AUTO.NS", "market_cap": "Large", "sector": "Automobile", "predicted_return": 0.12, "volatility": "Low", "price": 9500},
        {"name": "Bajaj Finserv", "ticker": "BAJAJFINSV.NS", "market_cap": "Large", "sector": "Financials", "predicted_return": 0.19, "volatility": "Medium", "price": 1600}, # Increased return
        {"name": "Britannia Industries", "ticker": "BRITANNIA.NS", "market_cap": "Large", "sector": "FMCG", "predicted_return": 0.10, "volatility": "Low", "price": 5000},
        {"name": "Cipla", "ticker": "CIPLA.NS", "market_cap": "Large", "sector": "Pharma", "predicted_return": 0.11, "volatility": "Low", "price": 1500},
        {"name": "Coal India", "ticker": "COALINDIA.NS", "market_cap": "Large", "sector": "Mining", "predicted_return": 0.08, "volatility": "Medium", "price": 450},
        {"name": "Divi's Lab", "ticker": "DIVISLAB.NS", "market_cap": "Large", "sector": "Pharma", "predicted_return": 0.15, "volatility": "Medium", "price": 3800},
        {"name": "Dr Reddy's Laboratories", "ticker": "DRL.NS", "market_cap": "Large", "sector": "Pharma", "predicted_return": 0.13, "volatility": "Low", "price": 6000},
        {"name": "Eicher Motors", "ticker": "EICHERMOT.NS", "market_cap": "Large", "sector": "Automobile", "predicted_return": 0.16, "volatility": "Medium", "price": 4300},
        {"name": "Grasim Industries", "ticker": "GRASIM.NS", "market_cap": "Large", "sector": "Cement", "predicted_return": 0.10, "volatility": "Low", "price": 2500},
        {"name": "HCL Technologies", "ticker": "HCLTECH.NS", "market_cap": "Large", "sector": "IT", "predicted_return": 0.12, "volatility": "Low", "price": 1400},
        {"name": "Hero MotoCorp", "ticker": "HEROMOTOCO.NS", "market_cap": "Large", "sector": "Automobile", "predicted_return": 0.09, "volatility": "Low", "price": 4800},
        {"name": "Hindalco Industries", "ticker": "HINDALCO.NS", "market_cap": "Large", "sector": "Metals", "predicted_return": 0.14, "volatility": "Medium", "price": 680},
        {"name": "Hindustan Unilever", "ticker": "HINDUNILVR.NS", "market_cap": "Large", "sector": "FMCG", "predicted_return": 0.10, "volatility": "Low", "price": 2500},
        {"name": "IndusInd Bank", "ticker": "INDUSINDBK.NS", "market_cap": "Large", "sector": "Financials", "predicted_return": 0.16, "volatility": "Medium", "price": 1500}, # Increased return
        {"name": "Kotak Mahindra Bank", "ticker": "KOTAKBANK.NS", "market_cap": "Large", "sector": "Financials", "predicted_return": 0.17, "volatility": "Low", "price": 1700}, # Increased return
        {"name": "Mahindra & Mahindra", "ticker": "M&M.NS", "market_cap": "Large", "sector": "Automobile", "predicted_return": 0.13, "volatility": "Medium", "price": 2400},
        {"name": "Maruti Suzuki India", "ticker": "MARUTI.NS", "market_cap": "Large", "sector": "Automobile", "predicted_return": 0.15, "volatility": "Low", "price": 12500},
        {"name": "Nestle India", "ticker": "NESTLEIND.NS", "market_cap": "Large", "sector": "FMCG", "predicted_return": 0.10, "volatility": "Low", "price": 25000},
        {"name": "NTPC", "ticker": "NTPC.NS", "market_cap": "Large", "sector": "Power", "predicted_return": 0.07, "volatility": "Low", "price": 350},
        {"name": "Oil & Natural Gas Corporation", "ticker": "ONGC.NS", "market_cap": "Large", "sector": "Energy", "predicted_return": 0.09, "volatility": "Medium", "price": 280},
        {"name": "Power Grid Corporation of India", "ticker": "POWERGRID.NS", "market_cap": "Large", "sector": "Power", "predicted_return": 0.08, "volatility": "Low", "price": 300},
        {"name": "SBI Life Insurance Company", "ticker": "SBILIFE.NS", "market_cap": "Large", "sector": "Financials", "predicted_return": 0.15, "volatility": "Low", "price": 1400}, # Increased return
        {"name": "Shree Cement", "ticker": "SHREECEM.NS", "market_cap": "Large", "sector": "Cement", "predicted_return": 0.12, "volatility": "Medium", "price": 27000},
        {"name": "Sun Pharmaceutical Industries", "ticker": "SUNPHARMA.NS", "market_cap": "Large", "sector": "Pharma", "predicted_return": 0.13, "volatility": "Low", "price": 1600},
        {"name": "Tata Consumer Products", "ticker": "TATACONSUM.NS", "market_cap": "Large", "sector": "FMCG", "predicted_return": 0.10, "volatility": "Low", "price": 1100},
        {"name": "Tata Motors", "ticker": "TATAMOTORS.NS", "market_cap": "Large", "sector": "Automobile", "predicted_return": 0.15, "volatility": "Medium", "price": 1000},
        {"name": "Tata Steel", "ticker": "TATASTEEL.NS", "market_cap": "Large", "sector": "Metals", "predicted_return": 0.14, "volatility": "High", "price": 180},
        {"name": "Tech Mahindra", "ticker": "TECHM.NS", "market_cap": "Large", "sector": "IT", "predicted_return": 0.12, "volatility": "Low", "price": 1300},
        {"name": "Ultratech Cement", "ticker": "ULTRACEMCO.NS", "market_cap": "Large", "sector": "Cement", "predicted_return": 0.11, "volatility": "Low", "price": 10000},
        {"name": "UPL", "ticker": "UPL.NS", "market_cap": "Large", "sector": "Chemicals", "predicted_return": 0.09, "volatility": "Medium", "price": 550},
        {"name": "Wipro", "ticker": "WIPRO.NS", "market_cap": "Large", "sector": "IT", "predicted_return": 0.10, "volatility": "Low", "price": 500},
        {"name": "Adani Enterprises", "ticker": "ADANIENT.NS", "market_cap": "Large", "sector": "Diversified", "predicted_return": 0.18, "volatility": "High", "price": 3300},
        {"name": "Adani Ports and Special Economic Zone", "ticker": "ADANIPORTS.NS", "market_cap": "Large", "sector": "Logistics", "predicted_return": 0.16, "volatility": "Medium", "price": 1400},
        {"name": "Apollo Hospitals Enterprise", "ticker": "APOLLOHOSP.NS", "market_cap": "Large", "sector": "Healthcare", "predicted_return": 0.15, "volatility": "Medium", "price": 6000},
        {"name": "Axis Bank", "ticker": "AXISBANK.NS", "market_cap": "Large", "sector": "Financials", "predicted_return": 0.165, "volatility": "Low", "price": 1200}, # Increased return
        {"name": "Bharat Petroleum Corporation", "ticker": "BPCL.NS", "market_cap": "Large", "sector": "Oil & Gas", "predicted_return": 0.08, "volatility": "Low", "price": 600},
        {"name": "Adani Green Energy", "ticker": "ADANIGREEN.NS", "market_cap": "Large", "sector": "Renewable Energy", "predicted_return": 0.20, "volatility": "High", "price": 1800},
        {"name": "Adani Transmission", "ticker": "ADANITRANS.NS", "market_cap": "Large", "sector": "Power Transmission", "predicted_return": 0.18, "volatility": "High", "price": 2000},
        {"name": "Ambuja Cements", "ticker": "AMBUJACEM.NS", "market_cap": "Large", "sector": "Cement", "predicted_return": 0.10, "volatility": "Low", "price": 600},
        {"name": "AU Small Finance Bank", "ticker": "AUBANK.NS", "market_cap": "Mid", "sector": "Financials", "predicted_return": 0.19, "volatility": "Medium", "price": 700}, # Increased return
        {"name": "Bandhan Bank", "ticker": "BANDHANBNK.NS", "market_cap": "Mid", "sector": "Financials", "predicted_return": 0.17, "volatility": "Medium", "price": 220}, # Increased return
        {"name": "Berger Paints India", "ticker": "BERGEPAINT.NS", "market_cap": "Large", "sector": "Chemicals", "predicted_return": 0.11, "volatility": "Low", "price": 650},
        {"name": "Bosch", "ticker": "BOSCHLTD.NS", "market_cap": "Large", "sector": "Automobile Ancillaries", "predicted_return": 0.10, "volatility": "Low", "price": 22000},
        {"name": "Bharat Forge", "ticker": "BHARATFORG.NS", "market_cap": "Mid", "sector": "Industrial Goods", "predicted_return": 0.15, "volatility": "Medium", "price": 1300},
        {"name": "Biocon", "ticker": "BIOCON.NS", "market_cap": "Mid", "sector": "Biotechnology", "predicted_return": 0.13, "volatility": "Medium", "price": 280},
        {"name": "Chola Investment", "ticker": "CHOLAFIN.NS", "market_cap": "Large", "sector": "Financials", "predicted_return": 0.20, "volatility": "Medium", "price": 1300}, # Increased return
        {"name": "Dabur India", "ticker": "DABUR.NS", "market_cap": "Large", "sector": "FMCG", "predicted_return": 0.10, "volatility": "Low", "price": 550},
        {"name": "DLF", "ticker": "DLF.NS", "market_cap": "Large", "sector": "Real Estate", "predicted_return": 0.14, "volatility": "Medium", "price": 900},
        {"name": "Godrej Consumer Products", "ticker": "GODREJCP.NS", "market_cap": "Large", "sector": "FMCG", "predicted_return": 0.11, "volatility": "Low", "price": 1200},
        {"name": "Hindware Home Innovation", "ticker": "HINDWARE.NS", "market_cap": "Small", "sector": "Consumer Durables", "predicted_return": 0.19, "volatility": "High", "price": 450},
        {"name": "Indiamart Intermesh", "ticker": "INDIAMART.NS", "market_cap": "Mid", "sector": "E-commerce", "predicted_return": 0.22, "volatility": "High", "price": 2700},
        {"name": "Indian Railway Catering & Tourism Corp Ltd", "ticker": "IRCTC.NS", "market_cap": "Mid", "sector": "Tourism", "predicted_return": 0.17, "volatility": "Medium", "price": 1100},
        {"name": "IPCA Laboratories", "ticker": "IPCALAB.NS", "market_cap": "Large", "sector": "Pharma", "predicted_return": 0.12, "volatility": "Low", "price": 1100},
        {"name": "Jubilant FoodWorks", "ticker": "JUBLFOOD.NS", "market_cap": "Large", "sector": "Restaurants", "predicted_return": 0.16, "volatility": "Medium", "price": 550},
        {"name": "LIC Housing Finance", "ticker": "LICHSGFIN.NS", "market_cap": "Mid", "sector": "Financials", "predicted_return": 0.15, "volatility": "Low", "price": 700}, # Increased return
        {"name": "Laurus Labs", "ticker": "LAURUSLABS.NS", "market_cap": "Mid", "sector": "Pharma", "predicted_return": 0.18, "volatility": "High", "price": 400},
        {"name": "Mphasis", "ticker": "MPHASIS.NS", "market_cap": "Large", "sector": "IT", "predicted_return": 0.15, "volatility": "Medium", "price": 2400},
        {"name": "Muthoot Finance", "ticker": "MUTHOOTFIN.NS", "market_cap": "Large", "sector": "Financials", "predicted_return": 0.14, "volatility": "Low", "price": 1700}, # Increased return
        {"name": "Navin Fluorine International", "ticker": "NAVINFLUOR.NS", "market_cap": "Mid", "sector": "Chemicals", "predicted_return": 0.17, "volatility": "Medium", "price": 3200},
        {"name": "Persistent Systems", "ticker": "PERSISTENT.NS", "market_cap": "Large", "sector": "IT", "predicted_return": 0.16, "volatility": "Medium", "price": 7800},
        {"name": "PVR Inox", "ticker": "PVRINOX.NS", "market_cap": "Mid", "sector": "Media & Entertainment", "predicted_return": 0.14, "volatility": "High", "price": 1400},
        {"name": "PI Industries", "ticker": "PIIND.NS", "market_cap": "Large", "sector": "Chemicals", "predicted_return": 0.13, "volatility": "Low", "price": 3800},
        {"name": "Polycab India", "ticker": "POLYCAB.NS", "market_cap": "Large", "sector": "Electrical Equipment", "predicted_return": 0.17, "volatility": "Medium", "price": 5800},
        {"name": "RBL Bank", "ticker": "RBLBANK.NS", "market_cap": "Mid", "sector": "Financials", "predicted_return": 0.16, "volatility": "Medium", "price": 250}, # Increased return
        {"name": "Route Mobile", "ticker": "ROUTEMOBILE.NS", "market_cap": "Small", "sector": "Telecom Services", "predicted_return": 0.20, "volatility": "High", "price": 1400},
        {"name": "Solar Industries India", "ticker": "SOLARINDS.NS", "market_cap": "Mid", "sector": "Chemicals", "predicted_return": 0.19, "volatility": "High", "price": 6000},
        {"name": "Tata Elxsi", "ticker": "TATAELXSI.NS", "market_cap": "Mid", "sector": "IT Services", "predicted_return": 0.18, "volatility": "High", "price": 7500},
        {"name": "Tata Communications", "ticker": "TATACOMM.NS", "market_cap": "Large", "sector": "Telecom Services", "predicted_return": 0.13, "volatility": "Low", "price": 1900},
        {"name": "Trent", "ticker": "TRENT.NS", "market_cap": "Large", "sector": "Retail", "predicted_return": 0.17, "volatility": "Medium", "price": 4500},
        {"name": "United Breweries", "ticker": "UBL.NS", "market_cap": "Large", "sector": "Beverages", "predicted_return": 0.10, "volatility": "Low", "price": 1900},
        {"name": "Voltas", "ticker": "VOLTAS.NS", "market_cap": "Large", "sector": "Consumer Durables", "predicted_return": 0.12, "volatility": "Medium", "price": 1400},
        {"name": "Astral", "ticker": "ASTRAL.NS", "market_cap": "Mid", "sector": "Building Materials", "predicted_return": 0.16, "volatility": "Medium", "price": 2000},
        {"name": "Avenue Supermarts", "ticker": "DMART.NS", "market_cap": "Large", "sector": "Retail", "predicted_return": 0.14, "volatility": "Low", "price": 4500},
        {"name": "Blue Dart Express", "ticker": "BLUEDART.NS", "market_cap": "Mid", "sector": "Logistics", "predicted_return": 0.15, "volatility": "Medium", "price": 7000},
        {"name": "Canara Bank", "ticker": "CANBK.NS", "market_cap": "Large", "sector": "Financials", "predicted_return": 0.12, "volatility": "Low", "price": 120}, # Increased return
        {"name": "Container Corporation of India", "ticker": "CONCOR.NS", "market_cap": "Large", "sector": "Logistics", "predicted_return": 0.11, "volatility": "Low", "price": 900},
        {"name": "Coromandel International", "ticker": "COROMANDEL.NS", "market_cap": "Mid", "sector": "Chemicals", "predicted_return": 0.13, "volatility": "Medium", "price": 1000},
        {"name": "Crompton Greaves Consumer Electricals", "ticker": "CROMPTON.NS", "market_cap": "Mid", "sector": "Consumer Durables", "predicted_return": 0.12, "volatility": "Low", "price": 300},
        {"name": "Devyani International", "ticker": "DEVYANI.NS", "market_cap": "Small", "sector": "Restaurants", "predicted_return": 0.20, "volatility": "High", "price": 180},
        {"name": "Federal Bank", "ticker": "FEDERALBNK.NS", "market_cap": "Mid", "sector": "Financials", "predicted_return": 0.13, "volatility": "Low", "price": 150}, # Increased return
        {"name": "Gland Pharma", "ticker": "GLAND.NS", "market_cap": "Mid", "sector": "Pharma", "predicted_return": 0.14, "volatility": "High", "price": 1800},
        {"name": "Gujarat Gas", "ticker": "GUJGASLTD.NS", "market_cap": "Mid", "sector": "Gas Distribution", "predicted_return": 0.11, "volatility": "Medium", "price": 500},
        {"name": "Honeywell Automation India", "ticker": "HONAUT.NS", "market_cap": "Mid", "sector": "Industrial Automation", "predicted_return": 0.15, "volatility": "Medium", "price": 40000},
        {"name": "Indian Bank", "ticker": "INDIANB.NS", "market_cap": "Large", "sector": "Financials", "predicted_return": 0.11, "volatility": "Low", "price": 300}, # Increased return
        {"name": "Indian Hotels Company", "ticker": "INDHOTEL.NS", "market_cap": "Mid", "sector": "Hospitality", "predicted_return": 0.16, "volatility": "Medium", "price": 600},
        {"name": "Jindal Steel & Power", "ticker": "JINDALSTEL.NS", "market_cap": "Large", "sector": "Metals", "predicted_return": 0.13, "volatility": "High", "price": 900},
        {"name": "Jubilant Pharmova", "ticker": "JUBILANT.NS", "market_cap": "Mid", "sector": "Pharma", "predicted_return": 0.12, "volatility": "Medium", "price": 450},
        {"name": "Kansai Nerolac Paints", "ticker": "KANSAINER.NS", "market_cap": "Mid", "sector": "Chemicals", "predicted_return": 0.10, "volatility": "Low", "price": 350},
        {"name": "L&T Technology Services", "ticker": "LTTS.NS", "market_cap": "Large", "sector": "IT Services", "predicted_return": 0.17, "volatility": "Medium", "price": 5500},
        {"name": "M&M Financial Services", "ticker": "MMFSL.NS", "market_cap": "Mid", "sector": "Financials", "predicted_return": 0.14, "volatility": "Medium", "price": 300}, # Increased return
        {"name": "Max Healthcare Institute", "ticker": "MAXHEALTH.NS", "market_cap": "Mid", "sector": "Healthcare", "predicted_return": 0.15, "volatility": "Medium", "price": 800},
        {"name": "Motilal Oswal Financial Services", "ticker": "MOTILALOFS.NS", "market_cap": "Mid", "sector": "Financials", "predicted_return": 0.21, "volatility": "Medium", "price": 2000}, # Increased return
        {"name": "NALCO", "ticker": "NATIONALUM.NS", "market_cap": "Mid", "sector": "Metals", "predicted_return": 0.10, "volatility": "Medium", "price": 180},
        {"name": "NMDC", "ticker": "NMDC.NS", "market_cap": "Large", "sector": "Mining", "predicted_return": 0.08, "volatility": "Low", "price": 250},
        {"name": "Oracle Financial Services Software", "ticker": "OFSS.NS", "market_cap": "Large", "sector": "IT", "predicted_return": 0.12, "volatility": "Low", "price": 9000},
        {"name": "Page Industries", "ticker": "PAGEIND.NS", "market_cap": "Large", "sector": "Apparel", "predicted_return": 0.15, "volatility": "Medium", "price": 38000},
        {"name": "Petronet LNG", "ticker": "PETRONET.NS", "market_cap": "Large", "sector": "Oil & Gas", "predicted_return": 0.09, "volatility": "Low", "price": 300},
        {"name": "Punjab National Bank", "ticker": "PNB.NS", "market_cap": "Large", "sector": "Financials", "predicted_return": 0.10, "volatility": "Low", "price": 100}, # Increased return
        {"name": "Zydus Lifesciences", "ticker": "ZYDUSLIFE.NS", "market_cap": "Large", "sector": "Pharma", "predicted_return": 0.11, "volatility": "Low", "price": 900}
    ],
    "mutual_funds": [ 
        {"name": "Parag Parikh Flexi Cap Fund", "type": "Equity", "category": "Flexi Cap", "predicted_return": 0.18, "volatility": "Medium", "amc": "PPFAS", "price": 60}, # NAV
        {"name": "ICICI Prudential Bluechip Fund", "type": "Equity", "category": "Large Cap", "predicted_return": 0.15, "volatility": "Low", "amc": "ICICI Pru", "price": 90},
        {"name": "Axis Midcap Fund", "type": "Equity", "category": "Mid Cap", "predicted_return": 0.20, "volatility": "Medium", "amc": "Axis", "price": 70},
        {"name": "SBI Small Cap Fund", "type": "Equity", "category": "Small Cap", "predicted_return": 0.22, "volatility": "High", "amc": "SBI", "price": 150},
        {"name": "Mirae Asset Emerging Bluechip Fund", "type": "Equity", "category": "Large & Mid Cap", "predicted_return": 0.19, "volatility": "Medium", "amc": "Mirae", "price": 100},
        {"name": "HDFC Liquid Fund", "type": "Debt", "category": "Liquid", "predicted_return": 0.06, "volatility": "Very Low", "amc": "HDFC", "price": 5000},
        {"name": "Aditya Birla Sun Life Frontline Equity Fund", "type": "Equity", "category": "Large Cap", "predicted_return": 0.14, "volatility": "Low", "amc": "Aditya Birla", "price": 400},
        {"name": "Nippon India Pharma Fund", "type": "Equity", "category": "Sectoral", "sector": "Healthcare", "predicted_return": 0.17, "volatility": "Medium", "amc": "Nippon", "price": 200},
        {"name": "ICICI Prudential Technology Fund", "type": "Equity", "category": "Sectoral", "sector": "IT", "predicted_return": 0.21, "volatility": "High", "amc": "ICICI Pru", "price": 180},
        {"name": "DSP Midcap Fund", "type": "Equity", "category": "Mid Cap", "predicted_return": 0.195, "volatility": "Medium", "amc": "DSP", "price": 120},
        {"name": "Quant Small Cap Fund", "type": "Equity", "category": "Small Cap", "predicted_return": 0.23, "volatility": "High", "amc": "Quant", "price": 130},
        # From image_7a0d25.png (Mutual Funds)
        {"name": "Aditya Birla Sun Life Frontline Equity Fund", "type": "Equity", "category": "Large Cap", "predicted_return": 0.14, "volatility": "Low", "amc": "Aditya Birla", "price": 400},
        {"name": "Axis Bluechip Fund", "type": "Equity", "category": "Large Cap", "predicted_return": 0.15, "volatility": "Low", "amc": "Axis", "price": 50},
        {"name": "Axis Growth Opportunities Fund", "type": "Equity", "category": "Large & Mid Cap", "predicted_return": 0.17, "volatility": "Medium", "amc": "Axis", "price": 25},
        {"name": "Axis Midcap Fund", "type": "Equity", "category": "Mid Cap", "predicted_return": 0.20, "volatility": "Medium", "amc": "Axis", "price": 70},
        {"name": "Axis Small Cap Fund", "type": "Equity", "category": "Small Cap", "predicted_return": 0.22, "volatility": "High", "amc": "Axis", "price": 80},
        {"name": "Canara Robeco Bluechip Equity Fund", "type": "Equity", "category": "Large Cap", "predicted_return": 0.145, "volatility": "Low", "amc": "Canara Robeco", "price": 45},
        {"name": "Canara Robeco Emerging Equities Fund", "type": "Equity", "category": "Large & Mid Cap", "predicted_return": 0.18, "volatility": "Medium", "amc": "Canara Robeco", "price": 120},
        {"name": "Edelweiss Large Cap Fund", "type": "Equity", "category": "Large Cap", "predicted_return": 0.13, "volatility": "Low", "amc": "Edelweiss", "price": 30},
        {"name": "Franklin India Feeder - US Opportunities Fund", "type": "Equity", "category": "International", "predicted_return": 0.19, "volatility": "High", "amc": "Franklin Templeton", "price": 50},
        {"name": "HDFC Balanced Advantage Fund", "type": "Hybrid", "category": "Balanced Advantage", "predicted_return": 0.16, "volatility": "Medium", "amc": "HDFC", "price": 400},
        {"name": "HDFC Flexi Cap Fund", "type": "Equity", "category": "Flexi Cap", "predicted_return": 0.17, "volatility": "Medium", "amc": "HDFC", "price": 70},
        {"name": "HDFC Large and Mid Cap Fund", "type": "Equity", "category": "Large & Mid Cap", "predicted_return": 0.165, "volatility": "Medium", "amc": "HDFC", "price": 100},
        {"name": "HDFC Mid-Cap Opportunities Fund", "type": "Equity", "category": "Mid Cap", "predicted_return": 0.21, "volatility": "Medium", "amc": "HDFC", "price": 150},
        {"name": "HDFC Small Cap Fund", "type": "Equity", "category": "Small Cap", "predicted_return": 0.23, "volatility": "High", "amc": "HDFC", "price": 100},
        {"name": "ICICI Prudential Equity & Debt Fund", "type": "Hybrid", "category": "Aggressive Hybrid", "predicted_return": 0.16, "volatility": "Medium", "amc": "ICICI Pru", "price": 300},
        {"name": "ICICI Prudential Flexicap Fund", "type": "Equity", "category": "Flexi Cap", "predicted_return": 0.17, "volatility": "Medium", "amc": "ICICI Pru", "price": 20},
        {"name": "ICICI Prudential Value Discovery Fund", "type": "Equity", "category": "Value", "predicted_return": 0.16, "volatility": "Medium", "amc": "ICICI Pru", "price": 280},
        {"name": "Kotak Emerging Equity Fund", "type": "Equity", "category": "Mid Cap", "predicted_return": 0.20, "volatility": "Medium", "amc": "Kotak", "price": 90},
        {"name": "Kotak Flexicap Fund", "type": "Equity", "category": "Flexi Cap", "predicted_return": 0.18, "volatility": "Medium", "amc": "Kotak", "price": 75},
        {"name": "L&T Midcap Fund", "type": "Equity", "category": "Mid Cap", "predicted_return": 0.19, "volatility": "Medium", "amc": "L&T", "price": 60},
        {"name": "Mirae Asset Emerging Bluechip Fund", "type": "Equity", "category": "Large & Mid Cap", "predicted_return": 0.19, "volatility": "Medium", "amc": "Mirae Asset", "price": 100},
        {"name": "Mirae Asset Large Cap Fund", "type": "Equity", "category": "Large Cap", "predicted_return": 0.15, "volatility": "Low", "amc": "Mirae Asset", "price": 80},
        {"name": "Mirae Asset Midcap Fund", "type": "Equity", "category": "Mid Cap", "predicted_return": 0.21, "volatility": "Medium", "amc": "Mirae Asset", "price": 70},
        {"name": "Mirae Asset Tax Saver Fund", "type": "Equity", "category": "ELSS", "predicted_return": 0.17, "volatility": "Medium", "amc": "Mirae Asset", "price": 30},
        {"name": "Nippon India Growth Fund", "type": "Equity", "category": "Mid Cap", "predicted_return": 0.20, "volatility": "Medium", "amc": "Nippon India", "price": 350},
        {"name": "PGIM India Flexi Cap Fund", "type": "Equity", "category": "Flexi Cap", "predicted_return": 0.175, "volatility": "Medium", "amc": "PGIM India", "price": 25},
        {"name": "Quant Active Fund", "type": "Equity", "category": "Flexi Cap", "predicted_return": 0.22, "volatility": "High", "amc": "Quant", "price": 500},
        {"name": "Quant Small Cap Fund", "type": "Equity", "category": "Small Cap", "predicted_return": 0.23, "volatility": "High", "amc": "Quant", "price": 130},
        {"name": "SBI Bluechip Fund", "type": "Equity", "category": "Large Cap", "predicted_return": 0.14, "volatility": "Low", "amc": "SBI", "price": 60},
        {"name": "SBI Contra Fund", "type": "Equity", "category": "Contra", "predicted_return": 0.19, "volatility": "Medium", "amc": "SBI", "price": 280},
        {"name": "SBI Equity Hybrid Fund", "type": "Hybrid", "category": "Aggressive Hybrid", "predicted_return": 0.15, "volatility": "Medium", "amc": "SBI", "price": 250},
        {"name": "SBI Flexicap Fund", "type": "Equity", "category": "Flexi Cap", "predicted_return": 0.17, "volatility": "Medium", "amc": "SBI", "price": 30},
        {"name": "SBI Large & Midcap Fund", "type": "Equity", "category": "Large & Mid Cap", "predicted_return": 0.16, "volatility": "Medium", "amc": "SBI", "price": 400},
        {"name": "SBI Long Term Equity Fund", "type": "Equity", "category": "ELSS", "predicted_return": 0.16, "volatility": "Medium", "amc": "SBI", "price": 350},
        {"name": "Sundaram Mid Cap Fund", "type": "Equity", "category": "Mid Cap", "predicted_return": 0.18, "volatility": "Medium", "amc": "Sundaram", "price": 100},
        {"name": "Tata Digital India Fund", "type": "Equity", "category": "Sectoral", "sector": "IT", "predicted_return": 0.20, "volatility": "High", "amc": "Tata", "price": 40},
        {"name": "Tata Ethical Fund", "type": "Equity", "category": "Thematic", "predicted_return": 0.15, "volatility": "Medium", "amc": "Tata", "price": 30},
        {"name": "Tata Flexi Cap Fund", "type": "Equity", "category": "Flexi Cap", "predicted_return": 0.16, "volatility": "Medium", "amc": "Tata", "price": 25},
        {"name": "Tata Large & Mid Cap Fund", "type": "Equity", "category": "Large & Mid Cap", "predicted_return": 0.155, "volatility": "Medium", "amc": "Tata", "price": 200},
        {"name": "UTI Flexi Cap Fund", "type": "Equity", "category": "Flexi Cap", "predicted_return": 0.17, "volatility": "Medium", "amc": "UTI", "price": 300},
        {"name": "UTI Mid Cap Fund", "type": "Equity", "category": "Mid Cap", "predicted_return": 0.19, "volatility": "Medium", "amc": "UTI", "price": 250},
        {"name": "WhiteOak Capital Flexi Cap Fund", "type": "Equity", "category": "Flexi Cap", "predicted_return": 0.19, "volatility": "Medium", "amc": "WhiteOak Capital", "price": 15},
        {"name": "UTI Nifty 50 Index Fund", "type": "Equity", "category": "Large Cap Index Fund", "predicted_return": 0.137, "volatility": "Low", "amc": "UTI", "price": 140},
        {"name": "Motilal Oswal S&P 500 Index Fund", "type": "Equity", "category": "International Index Fund", "predicted_return": 0.17, "volatility": "Medium", "amc": "Motilal Oswal", "price": 30},
        {"name": "SBI Debt Hybrid Fund", "type": "Hybrid", "category": "Conservative Hybrid", "predicted_return": 0.08, "volatility": "Low", "amc": "SBI", "price": 100},
        {"name": "Aditya Birla Sun Life Liquid Fund", "type": "Debt", "category": "Liquid", "predicted_return": 0.061, "volatility": "Very Low", "amc": "Aditya Birla", "price": 4000},
        {"name": "Axis Liquid Fund", "type": "Debt", "category": "Liquid", "predicted_return": 0.06, "volatility": "Very Low", "amc": "Axis", "price": 1000},
        {"name": "ICICI Prudential Liquid Fund", "type": "Debt", "category": "Liquid", "predicted_return": 0.062, "volatility": "Very Low", "amc": "ICICI Pru", "price": 3000},
        {"name": "Kotak Liquid Fund", "type": "Debt", "category": "Liquid", "predicted_return": 0.06, "volatility": "Very Low", "amc": "Kotak", "price": 2000},
        {"name": "Mirae Asset Liquid Fund", "type": "Debt", "category": "Liquid", "predicted_return": 0.061, "volatility": "Very Low", "amc": "Mirae Asset", "price": 1000},
        {"name": "Nippon India Liquid Fund", "type": "Debt", "category": "Liquid", "predicted_return": 0.06, "volatility": "Very Low", "amc": "Nippon India", "price": 5000},
        {"name": "SBI Liquid Fund", "type": "Debt", "category": "Liquid", "predicted_return": 0.062, "volatility": "Very Low", "amc": "SBI", "price": 4500},
        {"name": "Tata Liquid Fund", "type": "Debt", "category": "Liquid", "predicted_return": 0.06, "volatility": "Very Low", "amc": "Tata", "price": 1500},
        {"name": "UTI Liquid Fund", "type": "Debt", "category": "Liquid", "predicted_return": 0.061, "volatility": "Very Low", "amc": "UTI", "price": 2500},
        {"name": "Aditya Birla Sun Life Corporate Bond Fund", "type": "Debt", "category": "Corporate Bond", "predicted_return": 0.07, "volatility": "Low", "amc": "Aditya Birla", "price": 50},
        {"name": "Axis Corporate Bond Fund", "type": "Debt", "category": "Corporate Bond", "predicted_return": 0.072, "volatility": "Low", "amc": "Axis", "price": 40},
        {"name": "HDFC Corporate Bond Fund", "type": "Debt", "category": "Corporate Bond", "predicted_return": 0.07, "price": 105},
        {"name": "ICICI Prudential Corporate Bond Fund", "type": "Debt", "category": "Corporate Bond", "predicted_return": 0.071, "price": 60},
        {"name": "Kotak Corporate Bond Fund", "type": "Debt", "category": "Corporate Bond", "predicted_return": 0.07, "price": 55},
        {"name": "Nippon India Corporate Bond Fund", "type": "Debt", "category": "Corporate Bond", "predicted_return": 0.072, "price": 70},
        {"name": "SBI Corporate Bond Fund", "type": "Debt", "category": "Corporate Bond", "predicted_return": 0.071, "price": 80},
        {"name": "UTI Corporate Bond Fund", "type": "Debt", "category": "Corporate Bond", "predicted_return": 0.07, "price": 90},
        {"name": "Aditya Birla Sun Life Government Securities Fund", "type": "Debt", "category": "Gilt", "predicted_return": 0.075, "price": 30},
        {"name": "ICICI Prudential Gilt Fund", "type": "Debt", "category": "Gilt Fund", "predicted_return": 0.075, "price": 120},
        {"name": "SBI Gilt Fund", "type": "Debt", "category": "Gilt", "predicted_return": 0.076, "price": 110},
        {"name": "HDFC Credit Risk Debt Fund", "type": "Debt", "category": "Credit Risk", "predicted_return": 0.08, "price": 30},
        {"name": "SBI Banking & PSU Fund", "type": "Debt", "category": "Banking & PSU", "predicted_return": 0.073, "price": 25}
    ],
    "equity_etfs_index_funds": [
        {"name": "Nippon India ETF Nifty 50 BeES", "ticker": "NIFTYBEES", "type": "Equity", "category": "Large Cap Index ETF", "predicted_return": 0.14, "price": 260},
        {"name": "SBI Nifty 50 ETF", "ticker": "SETFNIF50", "type": "Equity", "category": "Large Cap Index ETF", "predicted_return": 0.138, "price": 250},
        {"name": "UTI Nifty 50 Index Fund", "type": "Equity", "category": "Large Cap Index Fund", "predicted_return": 0.137, "price": 140},
        {"name": "Nippon India ETF Nifty Next 50 Junior BeES", "ticker": "JUNIORBEES", "type": "Equity", "category": "Mid Cap Index ETF", "predicted_return": 0.16, "price": 600},
        {"name": "Axis Nifty 100 Index Fund", "type": "Equity", "category": "Large Cap Index Fund", "predicted_return": 0.135, "price": 130},
        {"name": "Motilal Oswal NASDAQ 100 ETF", "ticker": "MON100", "type": "Equity", "category": "International Index ETF", "predicted_return": 0.17, "price": 1500},
    ],
    "debt_etfs_index_funds": [
        {"name": "ICICI Prudential Gilt Fund", "type": "Debt", "category": "Gilt Fund", "predicted_return": 0.075, "price": 120}, # NAV
        {"name": "SBI Long Duration Fund", "type": "Debt", "category": "Long Duration", "predicted_return": 0.08, "price": 110},
        {"name": "HDFC Corporate Bond Fund", "type": "Debt", "category": "Corporate Bond", "predicted_return": 0.07, "price": 105},
        {"name": "Nippon India Nifty Target Maturity Fund - 2030", "type": "Debt", "category": "Target Maturity", "predicted_return": 0.078, "price": 100},
        {"name": "BHARAT Bond ETF - April 2032", "ticker": "BBETF0432", "type": "Debt", "category": "Target Maturity ETF", "predicted_return": 0.077, "price": 1000},
        {"name": "SBI-ETF 10Y Gilt", "ticker": "SBILTGILT", "type": "Debt", "category": "Gilt ETF", "predicted_return": 0.076, "price": 100},
    ],
    "gold_etfs": [
        {"name": "Nippon India ETF Gold BeES", "ticker": "GOLDBEES", "predicted_return": 0.09, "price": 60},
        {"name": "SBI Gold ETF", "ticker": "SETFGOLD", "predicted_return": 0.088, "price": 58},
        {"name": "ICICI Prudential Gold ETF", "ticker": "GOLDIETF", "predicted_return": 0.089, "price": 59},
    ]
}


def get_user_input():
    """Collects user input for risk profiling."""
    print("Please provide the following information for risk assessment:")
    while True:
        try:
            drawdown = float(input("Enter your maximum acceptable historical drawdown (e.g., 15 for 15%): "))
            if drawdown < 0:
                raise ValueError
            break
        except ValueError:
            print("Invalid input. Please enter a non-negative number for drawdown.")

    while True:
        try:
            salary = float(input("Enter your annual salary (in INR): "))
            if salary < 0:
                raise ValueError
            break
        except ValueError:
            print("Invalid input. Please enter a non-negative number for salary.")

    while True:
        try:
            dependents = int(input("Enter the number of dependents: "))
            if dependents < 0:
                raise ValueError
            break
        except ValueError:
            print("Invalid input. Please enter a non-negative integer for dependents.")

    while True:
        try:
            age = int(input("Enter your age: "))
            if not (18 <= age <= 100): # Assuming reasonable age range
                raise ValueError
            break
        except ValueError:
            print("Invalid input. Please enter a valid age (18-100).")

    investment_type_choice = ""
    while investment_type_choice not in ["1", "2", "3"]:
        investment_type_choice = input("What type of investment are you interested in? (Equity (1), Mutual Funds (2), Multi Asset Allocation (3)): ")
        if investment_type_choice not in ["1", "2", "3"]:
            print("Invalid input. Please choose 1, 2, or 3.")

    investment_type_map = {
        "1": "Equity",
        "2": "Mutual Funds",
        "3": "Multi Asset Allocation"
    }
    investment_type = investment_type_map[investment_type_choice]

    sector_preference = input("Do you have a preferred sector for investment? (Enter 'None' if no preference): ")
    if sector_preference.lower() == 'none':
        sector_preference = None

    while True:
        try:
            total_investment_amount = float(input("Enter your total investment amount (e.g., 100000): "))
            if total_investment_amount <= 0:
                raise ValueError
            break
        except ValueError:
            print("Invalid input. Please enter a positive number for total investment amount.")


    return {
        "drawdown": drawdown,
        "salary": salary,
        "dependents": dependents,
        "age": age,
        "investment_type": investment_type,
        "sector_preference": sector_preference,
        "total_investment_amount": total_investment_amount
    }

def calculate_risk_score(user_data):
    """Calculates the risk score based on user input and predefined rules."""
    risk_score = 0

    # Drawdown rules
    if user_data["drawdown"] <= 10:
        risk_score += 1
    elif 10 < user_data["drawdown"] <= 30:
        risk_score += 2
    else:  # drawdown > 30
        risk_score += 3

    # Salary rules
    if user_data["salary"] <= 1200000:
        risk_score += 1
    elif 1200000 < user_data["salary"] <= 3600000:
        risk_score += 2
    else:  # salary > 3600000
        risk_score += 3

    # Dependents rules
    if user_data["dependents"] <= 2:
        risk_score += 3
    elif 2 < user_data["dependents"] <= 5:
        risk_score += 2
    else: # dependents > 5
        risk_score += 1

    # Age rules
    if user_data["age"] <= 40:
        risk_score += 3
    elif 40 < user_data["age"] <= 60:
        risk_score += 2
    else: # age > 60
        risk_score += 1

    return risk_score

def categorize_risk_profile(risk_score):
    """Categorizes the user's risk profile based on the calculated risk score."""
    if risk_score <= 6:
        return "Low Risk 🛡️"
    elif 6 < risk_score <= 9:
        return "Medium Risk ⚖️"
    else:
        return "High Risk 🚀"

# --- Portfolio Recommendation Functions ---

def recommend_equity_portfolio(risk_profile, sector_preference, total_investment_amount):
    """
    Recommends an equity portfolio based on risk and sector preference,
    ensuring each stock receives at least one unit where possible, and
    allocating the total investment amount effectively.
    """
    recommended_stocks = []
    available_stocks = ASSET_DATA["stocks"]

    if sector_preference:
        sector_filtered_stocks = [s for s in available_stocks if s.get("sector", "").lower() == sector_preference.lower()]
        if not sector_filtered_stocks:
            print(f"Warning: No stocks found for sector '{sector_preference}'. Recommending from all sectors.")
        else:
            available_stocks = sector_filtered_stocks

    # Sort stocks by price (ascending) for initial allocation, then by predicted return (descending)
    # This helps ensure lower-priced stocks can get at least 1 unit more easily.
    available_stocks.sort(key=lambda x: (x["price"], -x["predicted_return"]))

    num_stocks_to_recommend = 7 # Target number of stocks

    # Filter stocks based on risk profile and market cap
    if risk_profile == "High Risk 🚀":
        eligible_stocks = [s for s in available_stocks if s["market_cap"] in ["Mid", "Small", "Large"]]
    elif risk_profile == "Medium Risk ⚖️":
        eligible_stocks = [s for s in available_stocks if s["market_cap"] in ["Large", "Mid"]]
    else: # Low Risk 🛡️
        eligible_stocks = [s for s in available_stocks if s["market_cap"] == "Large"]

    # Select the top N eligible stocks based on predicted return (after initial price sorting)
    # Re-sort to pick the highest predicted return among eligible ones for final selection
    eligible_stocks.sort(key=lambda x: x["predicted_return"], reverse=True)
    selected_stocks = eligible_stocks[:min(num_stocks_to_recommend, len(eligible_stocks))]

    # If not enough stocks were selected based on risk/sector, try to fill from general large caps
    if len(selected_stocks) < num_stocks_to_recommend and risk_profile != "High Risk 🚀":
        remaining_to_add = num_stocks_to_recommend - len(selected_stocks)
        # Add from large caps not already selected, sorted by predicted return
        additional_large_caps = [s for s in ASSET_DATA["stocks"] if s["market_cap"] == "Large" and s not in selected_stocks]
        additional_large_caps.sort(key=lambda x: x["predicted_return"], reverse=True)
        selected_stocks.extend(additional_large_caps[:min(remaining_to_add, len(additional_large_caps))])

    # Ensure selected stocks are unique
    final_selected_portfolio = list({frozenset(item.items()): item for item in selected_stocks}.values())
    final_selected_portfolio.sort(key=lambda x: x["predicted_return"], reverse=True) # Final sort by return for display


    # Allocate units and calculate cost
    allocated_portfolio = []
    remaining_investment = total_investment_amount
    num_assets = len(final_selected_portfolio)

    if num_assets == 0:
        return []

    # Strategy: Try to give at least one unit to each stock, starting with the cheapest
    # then distribute the remaining amount.
    
    # Sort by price ascending for initial unit allocation
    final_selected_portfolio.sort(key=lambda x: x["price"])

    # First pass: Allocate 1 unit to each if affordable
    for asset in final_selected_portfolio:
        if remaining_investment >= asset["price"] and asset["price"] > 0:
            units = 1
            cost = units * asset["price"]
            allocated_portfolio.append({**asset, "units": units, "cost": cost})
            remaining_investment -= cost
        else:
            # If even 1 unit is not affordable, we might need to skip or rethink strategy
            # For now, let's keep it in the list with 0 units if unallocated, but ideally, we avoid this.
            # The prompt specifically asked for no 0 units, so we should ensure it or omit the stock.
            # To adhere strictly to "no 0 units", we should only add if at least 1 unit can be bought.
            # Let's adjust: if we can't buy even 1 unit of a stock, it shouldn't be in the *final* recommendation.
            pass

    # Filter out stocks that couldn't even get 1 unit in the first pass
    allocated_portfolio = [item for item in allocated_portfolio if item["units"] > 0]
    
    # If after initial allocation, we have some remaining investment, distribute it among the allocated stocks
    # based on their "value" (e.g., predicted return, or simply evenly among those with units)
    if remaining_investment > 0 and len(allocated_portfolio) > 0:
        # Sort by predicted return (descending) to prioritize adding more units to high-return stocks
        allocated_portfolio.sort(key=lambda x: x["predicted_return"], reverse=True)
        
        while remaining_investment > 0:
            added_any = False
            for asset in allocated_portfolio:
                if remaining_investment >= asset["price"] and asset["price"] > 0:
                    units_to_add = int(remaining_investment / asset["price"]) # Buy as many as possible
                    if units_to_add > 0:
                        asset["units"] += units_to_add
                        asset["cost"] += units_to_add * asset["price"]
                        remaining_investment -= (units_to_add * asset["price"])
                        added_any = True
                if remaining_investment == 0:
                    break
            if not added_any and remaining_investment > 0: # Cannot add any more units
                break

    # Final sort for display
    allocated_portfolio.sort(key=lambda x: x["predicted_return"], reverse=True)

    return allocated_portfolio

def recommend_mf_portfolio(risk_profile, sector_preference):
    """Recommends a mutual fund portfolio based on risk and sector preference."""
    recommended_mfs = []

    available_equity_mfs = [mf for mf in ASSET_DATA["mutual_funds"] if mf["type"] == "Equity"]
    available_debt_mfs = [mf for mf in ASSET_DATA["mutual_funds"] if mf["type"] == "Debt"]

    if sector_preference:
        sector_filtered_equity_mfs = [mf for mf in available_equity_mfs if mf.get("sector", "").lower() == sector_preference.lower()]
        if not sector_filtered_equity_mfs:
            print(f"Warning: No equity mutual funds found for sector '{sector_preference}'. Recommending from all equity categories.")
        else:
            available_equity_mfs = sector_filtered_equity_mfs

    available_equity_mfs.sort(key=lambda x: x["predicted_return"], reverse=True)
    available_debt_mfs.sort(key=lambda x: x["predicted_return"], reverse=True)


    if risk_profile == "High Risk 🚀":
        high_risk_equity_categories = ["Mid Cap", "Small Cap", "Flexi Cap", "Large & Mid Cap", "Sectoral"]
        equity_mfs_for_high_risk = [mf for mf in available_equity_mfs if mf["category"] in high_risk_equity_categories]

        large_cap_mfs = [mf for mf in available_equity_mfs if mf["category"] == "Large Cap"]

        recommended_mfs.extend(random.sample(equity_mfs_for_high_risk, min(6, len(equity_mfs_for_high_risk))))
        remaining_large_caps_mf = [mf for mf in large_cap_mfs if mf not in recommended_mfs]
        recommended_mfs.extend(random.sample(remaining_large_caps_mf, min(2, len(remaining_large_caps_mf))))


    elif risk_profile == "Medium Risk ⚖️":
        large_cap_mfs = [mf for mf in available_equity_mfs if mf["category"] == "Large Cap"]
        mid_cap_mfs = [mf for mf in available_equity_mfs if mf["category"] == "Mid Cap"]
        flexi_large_mid_mfs = [mf for mf in available_equity_mfs if mf["category"] in ["Flexi Cap", "Large & Mid Cap", "Index Fund"]]

        num_large = min(3, len(large_cap_mfs))
        num_mid = min(2, len(mid_cap_mfs))
        num_flexi_large_mid = min(2, len(flexi_large_mid_mfs))

        recommended_mfs.extend(random.sample(large_cap_mfs, num_large))
        remaining_mid_mfs = [mf for mf in mid_cap_mfs if mf not in recommended_mfs]
        recommended_mfs.extend(random.sample(remaining_mid_mfs, num_mid))
        remaining_flexi_large_mid_mfs = [mf for mf in flexi_large_mid_mfs if mf not in recommended_mfs]
        recommended_mfs.extend(random.sample(remaining_flexi_large_mid_mfs, num_flexi_large_mid))

        if len(recommended_mfs) < 7:
            remaining_equity_mfs = [mf for mf in available_equity_mfs if mf not in recommended_mfs]
            recommended_mfs.extend(random.sample(remaining_equity_mfs, min(7 - len(recommended_mfs), len(remaining_equity_mfs))))

    else: # Low Risk 🛡️
        large_cap_equity_mfs = [mf for mf in available_equity_mfs if mf["category"] == "Large Cap"]

        recommended_mfs.extend(random.sample(large_cap_equity_mfs, min(5, len(large_cap_equity_mfs))))

        remaining_debt_mfs = [mf for mf in available_debt_mfs if mf not in recommended_mfs]
        recommended_mfs.extend(random.sample(remaining_debt_mfs, min(3, len(remaining_debt_mfs))))

    final_portfolio = list({frozenset(item.items()): item for item in recommended_mfs}.values())
    final_portfolio.sort(key=lambda x: x["predicted_return"], reverse=True)
    return final_portfolio[:8]

def recommend_multi_asset_portfolio_specific_funds(risk_profile, total_investment_amount, sector_preference):
    """
    Recommends specific assets for multi-asset allocation, including individual stocks for equity,
    debt ETFs/funds, and gold ETFs. Also calculates dynamic weightages and cost.
    Incorporates sector preference for equity stock selection and prioritizes by predicted return.
    """
    equity_assets = []
    bond_assets = []
    gold_assets = []

    # 1. Determine dynamic weightages based on risk profile
    equity_percentage = 0
    bond_percentage = 0
    gold_percentage = 0

    if risk_profile == "High Risk 🚀":
        equity_percentage = random.uniform(0.60, 0.70) # 60-70%
        bond_percentage = random.uniform(0.20, 0.30)  # 20-30%
        gold_percentage = 1 - equity_percentage - bond_percentage # Remaining for gold
    elif risk_profile == "Medium Risk ⚖️":
        equity_percentage = random.uniform(0.40, 0.50) # 40-50%
        bond_percentage = random.uniform(0.30, 0.40)  # 30-40%
        gold_percentage = 1 - equity_percentage - bond_percentage
    else: # Low Risk 🛡️
        equity_percentage = random.uniform(0.20, 0.30) # 20-30%
        bond_percentage = random.uniform(0.50, 0.60)  # 50-60%
        gold_percentage = 1 - equity_percentage - bond_percentage

    # Normalize if rounding errors cause sum to not be 1
    total_percent = equity_percentage + bond_percentage + gold_percentage
    equity_percentage /= total_percent
    bond_percentage /= total_percent
    gold_percentage /= total_percent

    # Calculate allocated amounts
    equity_amount = total_investment_amount * equity_percentage
    bond_amount = total_investment_amount * bond_percentage
    gold_amount = total_investment_amount * gold_percentage

    # 2. Select specific assets based on risk and allocated amount

    # --- Equity (Stocks) ---
    all_stocks = ASSET_DATA["stocks"]
    available_stocks_for_selection = []

    if sector_preference:
        sector_filtered_stocks = [s for s in all_stocks if s.get("sector", "").lower() == sector_preference.lower()]
        if not sector_filtered_stocks:
            print(f"Warning: No stocks found for sector '{sector_preference}' in multi-asset allocation. Selecting from all sectors.")
            available_stocks_for_selection = all_stocks # Fallback
        else:
            available_stocks_for_selection = sector_filtered_stocks
            print(f"Selecting equity stocks primarily from the '{sector_preference}' sector.")
    else:
        available_stocks_for_selection = all_stocks

    # Sort the available stocks by predicted return (highest first)
    available_stocks_for_selection.sort(key=lambda x: x["predicted_return"], reverse=True)

    num_equity_assets_target = 0
    if risk_profile == "High Risk 🚀":
        num_equity_assets_target = random.randint(3, 4)
    elif risk_profile == "Medium Risk ⚖️":
        num_equity_assets_target = random.randint(2, 3) # Aim for 2-3 equity assets
    else: # Low Risk 🛡️
        num_equity_assets_target = random.randint(1, 2)

    # Select the top N stocks based on predicted return from the *filtered* list
    selected_stocks_for_allocation = available_stocks_for_selection[:min(num_equity_assets_target, len(available_stocks_for_selection))]

    # Distribute equity amount among selected stocks
    if selected_stocks_for_allocation:
        # Distribute based on proportion of their predicted returns, or simply evenly
        # For simplicity and to ensure some units for each, let's distribute evenly for now
        amount_per_stock = equity_amount / len(selected_stocks_for_allocation)
        for stock in selected_stocks_for_allocation:
            units = int(amount_per_stock / stock["price"]) if stock["price"] > 0 else 0
            cost = units * stock["price"]
            # Only add if at least 1 unit can be purchased
            if units > 0:
                equity_assets.append({**stock, "allocated_amount": cost, "units": units, "asset_class_type": "Equity (Stock)"})


    # --- Bonds (Debt ETFs/Index Funds) ---
    available_debt_etfs_index = sorted(ASSET_DATA["debt_etfs_index_funds"], key=lambda x: x["predicted_return"], reverse=True)
    selected_bonds_for_allocation = []
    num_bond_assets_target = 0

    if risk_profile == "High Risk 🚀":
        num_bond_assets_target = random.randint(2, 3)
    elif risk_profile == "Medium Risk ⚖️":
        num_bond_assets_target = random.randint(3, 4) # Aim for 3-4 debt assets
    else: # Low Risk 🛡️
        num_bond_assets_target = random.randint(4, 5)

    selected_bonds_for_allocation.extend(available_debt_etfs_index[:min(num_bond_assets_target, len(available_debt_etfs_index))])


    # Distribute bond amount among selected bond assets
    if selected_bonds_for_allocation:
        amount_per_bond_asset = bond_amount / len(selected_bonds_for_allocation)
        for bond_asset in selected_bonds_for_allocation:
            units = int(amount_per_bond_asset / bond_asset["price"]) if bond_asset["price"] > 0 else 0
            cost = units * bond_asset["price"]
            if units > 0:
                bond_assets.append({**bond_asset, "allocated_amount": cost, "units": units, "asset_class_type": "Debt (ETF/Fund)"})


    # --- Gold (Gold ETFs) ---
    available_gold_etfs = sorted(ASSET_DATA["gold_etfs"], key=lambda x: x["predicted_return"], reverse=True)
    selected_gold_for_allocation = []

    # Typically 1 gold ETF
    num_gold_assets_target = 1
    selected_gold_for_allocation.extend(available_gold_etfs[:min(num_gold_assets_target, len(available_gold_etfs))])

    # Distribute gold amount among selected gold assets
    if selected_gold_for_allocation:
        amount_per_gold_asset = gold_amount / len(selected_gold_for_allocation)
        for gold_asset in selected_gold_for_allocation:
            units = int(amount_per_gold_asset / gold_asset["price"]) if gold_asset["price"] > 0 else 0
            cost = units * gold_asset["price"]
            if units > 0:
                gold_assets.append({**gold_asset, "allocated_amount": cost, "units": units, "asset_class_type": "Gold (ETF)"})


    # Combine all assets and adjust to target 7-8 assets if necessary
    all_recommended_assets = equity_assets + bond_assets + gold_assets
    final_portfolio = list({frozenset(item.items()): item for item in all_recommended_assets}.values()) # Remove duplicates


    # Adjust number of assets to be within 7-8 range
    current_asset_count = len(final_portfolio)
    if current_asset_count > 8:
        # If too many, trim the lowest predicted return assets until 8
        final_portfolio.sort(key=lambda x: x["predicted_return"] if "predicted_return" in x else 0) # Sort ascending
        final_portfolio = final_portfolio[current_asset_count - 8:] # Keep the top 8
        final_portfolio.sort(key=lambda x: x["predicted_return"] if "predicted_return" in x else 0, reverse=True) # Sort back for display
    elif current_asset_count < 7:
        remaining_to_add = 7 - current_asset_count
        # Prioritize adding from filtered equity, then general debt, then general gold
        # to ensure diversified fill.

        # Candidates that are not already in final_portfolio
        additional_equity_candidates = [s for s in available_stocks_for_selection if s not in final_portfolio]
        additional_debt_candidates = [d for d in ASSET_DATA["debt_etfs_index_funds"] if d not in final_portfolio]
        additional_gold_candidates = [g for g in ASSET_DATA["gold_etfs"] if g not in final_portfolio]

        # Try to add more equity
        num_added_equity = min(remaining_to_add, len(additional_equity_candidates))
        for i in range(num_added_equity):
            asset = additional_equity_candidates[i]
            # Ensure it's affordable for at least 1 unit if we're adding it
            if asset["price"] > 0 and total_investment_amount * 0.005 >= asset["price"]: # Try to allocate small amount for fillers
                units = 1 # Just 1 unit to fill
                cost = units * asset["price"]
                final_portfolio.append({**asset, "allocated_amount": cost, "units": units, "asset_class_type": "Equity (Stock)"})
                remaining_to_add -= 1
            if remaining_to_add == 0: break

        # If still short, add more debt
        if remaining_to_add > 0:
            num_added_debt = min(remaining_to_add, len(additional_debt_candidates))
            for i in range(num_added_debt):
                asset = additional_debt_candidates[i]
                if asset["price"] > 0 and total_investment_amount * 0.005 >= asset["price"]:
                    units = 1
                    cost = units * asset["price"]
                    final_portfolio.append({**asset, "allocated_amount": cost, "units": units, "asset_class_type": "Debt (ETF/Fund)"})
                    remaining_to_add -= 1
                if remaining_to_add == 0: break

        # If still short, add more gold
        if remaining_to_add > 0:
            num_added_gold = min(remaining_to_add, len(additional_gold_candidates))
            for i in range(num_added_gold):
                asset = additional_gold_candidates[i]
                if asset["price"] > 0 and total_investment_amount * 0.005 >= asset["price"]:
                    units = 1
                    cost = units * asset["price"]
                    final_portfolio.append({**asset, "allocated_amount": cost, "units": units, "asset_class_type": "Gold (ETF)"})
                    remaining_to_add -= 1
                if remaining_to_add == 0: break


    # Recalculate allocated amounts based on new counts and total budget
    # This step is crucial to re-distribute the total_investment_amount across the final_portfolio
    # based on the initial percentages, but now spread across the exact chosen assets.

    # Calculate actual counts for each asset class in the final portfolio
    equity_count = sum(1 for a in final_portfolio if "Equity" in a['asset_class_type'])
    bond_count = sum(1 for a in final_portfolio if "Debt" in a['asset_class_type'])
    gold_count = sum(1 for a in final_portfolio if "Gold" in a['asset_class_type'])

    # Distribute the target *class* amounts among the assets selected within that class
    for asset in final_portfolio:
        if "Equity" in asset['asset_class_type'] and equity_count > 0:
            amount_for_this_asset = equity_amount / equity_count
            units = int(amount_for_this_asset / asset['price']) if asset['price'] > 0 else 0
            # Ensure at least 1 unit if previously selected, if not, adjust logic to remove if not affordable
            if units == 0 and asset["price"] > 0: # If it became 0 after redistribution, try to make it 1 if budget allows
                if amount_for_this_asset >= asset["price"]:
                    units = 1
                else: # If even 1 unit isn't affordable for this proportionate share, consider removing or adjusting
                    # For strict "no 0 units", we'd remove. For now, let it be 0 if it really can't fit.
                    # This scenario is less likely if initial selection and filling logic works well.
                    pass
            asset['allocated_amount'] = units * asset['price']
            asset['units'] = units
        elif "Debt" in asset['asset_class_type'] and bond_count > 0:
            amount_for_this_asset = bond_amount / bond_count
            units = int(amount_for_this_asset / asset['price']) if asset['price'] > 0 else 0
            if units == 0 and asset["price"] > 0 and amount_for_this_asset >= asset["price"]: units = 1
            asset['allocated_amount'] = units * asset['price']
            asset['units'] = units
        elif "Gold" in asset['asset_class_type'] and gold_count > 0:
            amount_for_this_asset = gold_amount / gold_count
            units = int(amount_for_this_asset / asset['price']) if asset['price'] > 0 else 0
            if units == 0 and asset["price"] > 0 and amount_for_this_asset >= asset["price"]: units = 1
            asset['allocated_amount'] = units * asset['price']
            asset['units'] = units

    # Filter out any assets that ended up with 0 units after final allocation adjustment
    final_portfolio = [asset for asset in final_portfolio if asset.get('units', 0) > 0]

    # Final sort after potentially adding more and adjusting
    final_portfolio.sort(key=lambda x: x["predicted_return"] if "predicted_return" in x else 0, reverse=True)

    # Recalculate actual allocation percentages based on final allocated amounts
    actual_equity_allocated = sum(a['allocated_amount'] for a in final_portfolio if "Equity" in a['asset_class_type'])
    actual_bond_allocated = sum(a['allocated_amount'] for a in final_portfolio if "Debt" in a['asset_class_type'])
    actual_gold_allocated = sum(a['allocated_amount'] for a in final_portfolio if "Gold" in a['asset_class_type'])
    
    total_actual_allocated = actual_equity_allocated + actual_bond_allocated + actual_gold_allocated

    actual_equity_percent = (actual_equity_allocated / total_actual_allocated) * 100 if total_actual_allocated > 0 else 0
    actual_bond_percent = (actual_bond_allocated / total_actual_allocated) * 100 if total_actual_allocated > 0 else 0
    actual_gold_percent = (actual_gold_allocated / total_actual_allocated) * 100 if total_actual_allocated > 0 else 0


    return {
        "allocation_percentages": {
            "Equity": f"{actual_equity_percent:.0f}%",
            "Bonds": f"{actual_bond_percent:.0f}%",
            "Gold": f"{actual_gold_percent:.0f}%"
        },
        "recommended_assets": final_portfolio
    }


# --- Main Execution Flow ---
if __name__ == "__main__":
    user_profile = get_user_input()
    calculated_risk_score = calculate_risk_score(user_profile)
    risk_profile = categorize_risk_profile(calculated_risk_score)

    print(f"\n--- Risk Assessment Results ---")
    print(f"Calculated Risk Score: {calculated_risk_score}")
    print(f"Your Risk Profile: {risk_profile}")
    print("-" * 30)

    print("\n--- Portfolio Recommendation ---")
    if user_profile["investment_type"].lower() == "equity":
        # Pass total_investment_amount to the equity recommendation function
        portfolio = recommend_equity_portfolio(risk_profile, user_profile["sector_preference"], user_profile["total_investment_amount"])
        if portfolio:
            print(f"Recommended Equity Portfolio for {risk_profile}:")
            total_equity_cost = 0
            for i, asset in enumerate(portfolio):
                # Units and cost are now calculated within recommend_equity_portfolio
                units = asset.get('units', 0)
                cost = asset.get('cost', 0.0)
                total_equity_cost += cost
                if units > 0: # Only print if units are allocated
                    print(f"{i+1}. {asset['name']} ({asset['ticker']}) - Market Cap: {asset['market_cap']}, Sector: {asset['sector']}, Predicted Return: {asset['predicted_return']:.2%}, Units: {units}, Cost: ₹{cost:,.2f}")
            print(f"\nTotal Allocated Equity Cost: ₹{total_equity_cost:,.2f} (from ₹{user_profile['total_investment_amount']:,.2f} target)")
        else:
            print("Could not generate a suitable equity portfolio based on your preferences or budget for individual stocks.")

    elif user_profile["investment_type"].lower() == "mutual funds":
        portfolio = recommend_mf_portfolio(risk_profile, user_profile["sector_preference"])
        if portfolio:
            print(f"Recommended Mutual Fund Portfolio for {risk_profile}:")
            # For mutual funds, still distribute evenly and allow fractional units
            amount_per_mf = user_profile["total_investment_amount"] / len(portfolio) if len(portfolio) > 0 else 0
            total_mf_cost = 0
            for i, asset in enumerate(portfolio):
                units = round(amount_per_mf / asset["price"], 3) if asset["price"] > 0 else 0 # MF units can be fractional
                cost = units * asset["price"]
                total_mf_cost += cost
                # Ensure at least a small amount is allocated for display if price > 0
                if units * asset["price"] > 0.01: # Check if cost is meaningful
                    print(f"{i+1}. {asset['name']} (Type: {asset['type']}, Category: {asset['category']}), Predicted Return: {asset['predicted_return']:.2%}, Units: {units}, Cost: ₹{cost:,.2f}")
            print(f"\nTotal Allocated Mutual Fund Cost: ₹{total_mf_cost:,.2f} (from ₹{user_profile['total_investment_amount']:,.2f} target)")
        else:
            print("Could not generate a suitable mutual fund portfolio based on your preferences.")

    else: # Multi Asset Allocation
        allocation_result = recommend_multi_asset_portfolio_specific_funds(risk_profile, user_profile["total_investment_amount"], user_profile["sector_preference"])

        print(f"Recommended Asset Allocation for {risk_profile}:")
        for asset_class, weightage in allocation_result["allocation_percentages"].items():
            print(f"- {asset_class}: {weightage}")

        specific_assets = allocation_result["recommended_assets"]
        if specific_assets:
            print(f"\nSpecific Recommended Assets for {risk_profile} Multi-Asset Portfolio ({len(specific_assets)} assets):")
            total_cost_breakdown = {"Equity": 0, "Debt": 0, "Gold": 0}

            for i, asset in enumerate(specific_assets):
                name_display = asset.get('name')
                ticker_display = f" ({asset.get('ticker')})" if asset.get('ticker') else ""
                category_display = f" - Category: {asset.get('category')}" if asset.get('category') else ""
                sector_display = f" - Sector: {asset.get('sector')}" if asset.get('sector') else ""
                predicted_return_display = f", Pred. Return: {asset.get('predicted_return', 0):.2%}"

                # Get units and cost (already calculated in the function)
                units = asset.get('units', 0)
                cost = asset.get('allocated_amount', 0)

                asset_type_display = asset.get('asset_class_type', 'Unknown')
                if "Equity" in asset_type_display: total_cost_breakdown["Equity"] += cost
                elif "Debt" in asset_type_display: total_cost_breakdown["Debt"] += cost
                elif "Gold" in asset_type_display: total_cost_breakdown["Gold"] += cost

                print(f"{i+1}. {name_display}{ticker_display} ({asset_type_display}){category_display}{sector_display}{predicted_return_display}, Units: {units}, Cost: ₹{cost:,.2f}")

            print(f"\nTotal Cost Breakdown:")
            for asset_type, cost in total_cost_breakdown.items():
                print(f"- {asset_type}: ₹{cost:,.2f}")
            print(f"Total Portfolio Cost: ₹{sum(total_cost_breakdown.values()):,.2f} (from ₹{user_profile['total_investment_amount']:,.2f} target)")

        else:
            print("Could not generate specific assets for multi-asset portfolio.")
    print("-" * 30)