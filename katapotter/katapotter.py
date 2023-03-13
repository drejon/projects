def calculate_discount(basket):
    saga = ['hp1', 'hp2', 'hp3', 'hp4', 'hp5',]
    books =  []
    n_books = 0

    dicounts = {
        1: 1,
        2: 0.95,
        3: 0.90,
        4: 0.80,
        5: 0.75,
    }
    for book in basket:
        if book in saga:
            if book in books:
                n_books += 0
            else:
                books.append(book)
                n_books += 1
    price = (8*n_books*dicounts[n_books])
    print(price)
    return price

basket = ['hp1', 'hp1']
result = calculate_discount(basket)
expected_result = 16
print(result)
#assert result == expected_result