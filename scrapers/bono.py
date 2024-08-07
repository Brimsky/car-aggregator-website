from bs4 import BeautifulSoup
import requests


url = "https://www.bonotimber.com/pakalpojumi/apalkoka-tirdznieciba"


def fetch_webpage(url):
    response = requests.get(url)
    return BeautifulSoup(response.content, "html.parser")

def extract_cell_data(row, data_label):
    cell = row.find('div', attrs={'data-label': data_label})
    return cell.text.strip() if cell else 'N/A'

def is_valid_row(row_data):
    return any(data != 'N/A' for data in row_data)

def process_timber_table(table):
    headers = [
        'Sortiments', 'Garums (m)', 'Diametrs (cm)', 'Rīga (RCT)', 
        'Salacgrīva', 'Mērsrags', 'Valmiera', 'Jēkabpils', 
        'Gulbene', 'Riebiņi (Preiļu novads)'
    ]
    
    print("\nNew Table:")
    print(" | ".join(headers))
    print("-" * 100)

    rows = table.find_all('div')[1:]  # Skip the header row
    for row in rows:
        row_data = [extract_cell_data(row, header) for header in headers]
        if is_valid_row(row_data):
            print(" | ".join(row_data))

def main():
    url = "https://www.bonotimber.com/pakalpojumi/apalkoka-tirdznieciba"
    soup = fetch_webpage(url)
    
    timber_tables = soup.find_all(class_="table table--roundwood")
    
    for table in timber_tables:
        process_timber_table(table)

if __name__ == "__main__":
    main()