package models

import (
	"gorm.io/gorm"
)

type Comment struct {
	gorm.Model
	Title string `json:"title"`
	Content string `json:"content"`
	
	
}