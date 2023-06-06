readings=open('D:/vs_code/visualstudiocodes.github.io-1/python-codes/practice/electric_bill_generator/Meter Readings - Sheet1.csv','r')
biller_details=readings.read().split('\n')[1].split(',')
print(biller_details)
address=biller_details[0]
name=biller_details[1]
units=int(biller_details[3])-int(biller_details[2])
load=4
total_bill=5500
fixed_chargers=80
duty_tax=20
electricity_tax=145.212
total=8000
output=open('D:/vs_code/visualstudiocodes.github.io-1/python-codes/practice/electric_bill_generator/bill.txt','w')
output.write(f"""                                    ELECTRICITY BILL    
        {name}                                                              14 November 2022
        {address}
        
            Total units used - {units}
            Load demand      - {load}                               
            
                                                                    Total cost of unit used - {total_bill}
                                                                    Fixed charges           - {fixed_chargers}
                                                                    duty tax                - {duty_tax}
                                                                    electricity_tax         - {electricity_tax}
                                                                    
                Total: {total}""")
