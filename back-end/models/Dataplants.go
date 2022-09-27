package models

import (
	"gorm.io/gorm"
)

type Dataplants struct {
	gorm.Model
	Nameplant string `json:"nameplant"`
	Region    string `json:"region"`
	Type      string `json:"type"`
	Content   string `json:"content"`
	Image     string `json:"image"`
}


