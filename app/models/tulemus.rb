class Tulemus < ActiveRecord::Base
	self.table_name = 'tulemus'
	belongs_to :kasutaja
	belongs_to :rada

end
