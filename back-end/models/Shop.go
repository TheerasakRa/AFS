package models

import (
	"gorm.io/gorm"
)

type Shop struct {
	gorm.Model
	IoTName string `json:"iotname"`
	Price   string `json:"price"`
	Detail  string `json:"detail"`
}


