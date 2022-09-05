# list=[7,4,1,2,13,0,-5]
# i=0
# while i< len(list):
#     j=0
#     while j<i:
#         if list[i]<list[j]:
#             temp =list[i]
#             list[i]=list[j]
#             list[j]=temp
#         j=j+1
#     i=i+1            
# print(list)

dic={}
for i in range(1,16):
    dic[i]=i*i
print(dic)
my_dict = {'a':50,'b':58,'c': 56,'d':40,'e':100,'f':20} 
empty=[]
max=0
for i in my_dict:
    count=0
    for j in my_dict:
        if my_dict[i]>my_dict[j]:
            max=my_dict[i]
            key=i
            count+=1
        if count==3:
            empty.append(key)
            break
print("expected result=",empty)