import smartpy as sp

class SalamunContract(sp.Contract):
    def __init__(self,initial_value):
        self.init(value = initial_value)

    @sp.entry_point
    def increment(self, value):
        sp.verify(value > 0, "Input value harus lebih dari 0")
        self.data.value += value

    @sp.entry_point
    def decrement(self, value):
        sp.verify(value > 0, "Input value harus lebih dari 0")
        sp.verify(self.data.value - value >= 0, "Value saat ini sudah kurang dari 0")
        self.data.value -= value

sp.add_compilation_target("compiled",SalamunContract(1))               