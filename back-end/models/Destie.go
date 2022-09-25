package models

import (
	"gorm.io/gorm"
)

type Desti struct {
	gorm.Model
	Name       string `json:"name"`
	Phonnumber string `json:"phonnumber"`
	Province   string `json:"province"`
	District   string `json:"district"`
	Parish     string `json:"parish"`
	Address    string `json:"address_details"`
	PostalCode string `json:"postalcode"`
}
