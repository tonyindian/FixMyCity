from django.db import models


Category_Names = [
    (1, "Abfall/Sammelstelle"),
    (2, "Beleuchtung/Uhren"),
    (3, "Brunnen/Hydranten"),
    (4, "Graffiti"),
    (5, "Grünflächen/Spielplätze"),
    (6, "Signalisation/Lichtsignal"),
    (7, "Strasse/Trottoir/Platz"),
    (8, "ÖV")
]


class Category(models.Model):

    name = models.IntegerField(choices=Category_Names)

    def __str__(self):
        return self.name
