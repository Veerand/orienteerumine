class WelcomeController < ApplicationController
	def index
		@rada=Rada.first.nimi
	end
end
