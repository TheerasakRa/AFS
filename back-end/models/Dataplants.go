package models

import 
(
	"gorm.io/gorm"
)

type Dataplants struct {
    gorm.Model
    Title    string `json:"title"`
    Body     string `json:"body"`
    Contract string `json:"contract"`
}