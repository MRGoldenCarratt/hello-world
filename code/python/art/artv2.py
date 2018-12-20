import turtle

def square():
        for i in range(4):
                turtle.forward(100)
                turtle.right(90)
def triangle():
        for i in range(3):
                turtle.forward(100)
                turtle.right(120)
def square2():
        for i in range(4):
                turtle.forward(50)
                turtle.right(90)
def triangle2():
        for i in range(3):
                turtle.forward(50)
                turtle.right(120)
def square3():
        for i in range(4):
                turtle.forward(150)
                turtle.right(90)
def triangle3():
        for i in range(3):
                turtle.forward(150)
                turtle.right(120)
turtle.pensize(5)
turtle.color("red")
for i in range(12):
    square3()
    turtle.right(30)
turtle.color("blue")
for i in range(12):
    triangle3()
    turtle.right(30)
turtle.color("red")
for i in range(12):
    square()
    turtle.right(30)
turtle.color("blue")
for i in range(12):
    triangle()
    turtle.right(30)
turtle.color("red")
for i in range(12):
    square2()
    turtle.right(30)
turtle.color("blue")
for i in range(12):
    triangle2()
    turtle.right(30)
for i in range(9990):
        print("im done and this will anoy you...",i)


        



