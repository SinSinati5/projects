from numba import jit, cuda

x = "QWERTYUIOP\{\}|ASDFGHJKL:\"ZXCVBNM<>?qwertyuiop[]\\asdfghjkl;'zxcvbnm,./`1234567890-=~!@#$%^&*()_+"

@jit(target_backend='cuda')                         
def run(): 
    for x1 in x:
        for x2 in x:
            for x3 in x:
                for x4 in x:
                    for x5 in x:
                        for x6 in x:
                            for x7 in x:
                                for x8 in x:
                                    print(x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8)


run()